import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
import { NO_RM_EQUIPMENTS, METHODS, PUBLIC_BODYPARTS } from '../../../constants';

@Component({
  selector: 'osg-progression-builder',
  templateUrl: './main.component.html'
})
export class ProgressionBuilderComponent implements OnInit{

  @Output() cancel: EventEmitter<any> = new EventEmitter();

  // weeks = [];
  // plans = [];
  // workouts = [];
  // public data = [];
  isLoading = true;

  get data() {
    return this.dataService.sharedData;
  }
  set data(val) {
    this.dataService.sharedData = val;
  }

  get weeks() {
    return this.dataService.weeks;
  }
  set weeks(val) {
    this.dataService.weeks = val;
  }

  get week_types() {
    return this.dataService.week_types;
  }
  set week_types(val) {
    this.dataService.week_types = val;
  }

  get plans() {
    return this.dataService.plans;
  }
  set plans(val) {
    this.dataService.plans = val;
  }

  get workouts() {
    return this.dataService.workouts;
  }
  set workouts(val) {
    this.dataService.workouts = val;
  }

  get design_data() {
    return this.dataService.design_data;
  }
  set design_data(val) {
    this.dataService.design_data = val;
  }

  get program() {
    return this.dataService.program;
  }

  get progression_models() {
    return this.dataService.progression_models;
  }

  link_name = "Read Less";
  isShow = true;

  swal: SweetAlert = _swal as any;

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private dataService: DataService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.spinner.show();
    this.loadProgressionData(this.dataService.cur_program_id);
  }

  loadProgressionData(program_id) {
    this.http.post('/progression/duplicateFromCalendarBuilder?program_id='+program_id, {})
      .subscribe(resp => {
        var temp = [];
        var temp1 = [];
        resp['weeks'].forEach(item => {
          temp.push(JSON.parse(item.data));
          temp1.push(item.week_type)
        });
        this.weeks = temp;
        this.week_types = temp1;

        this.plans = resp['plans'];
        // console.log('plans = ', resp['data']);
        this.plans.forEach((plan, index) => {
          plan.plan_id = index + 1;
        });

        this.workouts = resp['workouts'];
        // console.log('workouts = ', resp['data']);
        this.workouts.forEach(workout => {
          this.plans.forEach(plan => {
            if(plan.id == workout.plan) {
              workout.plan_id = plan.plan_id;
            }
          })
        });

        this.calculateData();
    });
  }

  calculateData() {
    var dataArray = [];

    console.log('>>> weeks on progression-builder: ', this.weeks);
    console.log('>>> workouts: ', this.workouts);
    this.weeks.forEach(week => {
      var temp = [];
      week.forEach(day => {
        var tmpData = new Object();
        tmpData['day'] = day;
        tmpData['body_parts'] = [];
        tmpData['total_body_parts'] = [];

        let prevBodyPart = '';
        let prevWorkout = 0;

        this.workouts.forEach(workout => {
          const rm_show = NO_RM_EQUIPMENTS.findIndex(equipment => workout.equipment_name == equipment) == -1 ? true : false;
          if (!rm_show) workout.rm = 0;

          if (workout.plan == day) {
            if (prevBodyPart == workout.bodypart_name) {
              const bodypart_len = tmpData['body_parts'].length;
              const body_part = tmpData['body_parts'][bodypart_len - 1];
              const exercise_len = body_part.exercises.length;

              if (exercise_len > 0 && body_part.exercises[exercise_len - 1].workout == workout.workout) {
                body_part.exercises[exercise_len - 1].data.push(workout);
                body_part.exercises[exercise_len - 1].row++;

              } else {
                body_part.exercises.push({
                  name: workout.name,
                  workout: workout.workout,
                  data: [workout],
                  exercise_code: workout.exercise,
                  equipment_name: workout.equpiment_name,
                  rm_show: rm_show,
                  row: 1
                });
              }

              body_part.row++;

              prevWorkout = workout.workout
            } else {
              tmpData['body_parts'].push({
                name: workout.bodypart_name,
                exercises: [{
                  name: workout.name,
                  workout: workout.workout,
                  data: [workout],
                  exercise_code: workout.exercise,
                  equipment_name: workout.equpiment_name,
                  rm_show: rm_show,
                  row: 1
                }],
                row: 1,
              });
            }
            prevBodyPart = workout.bodypart_name;

            // get total body parts
            var flg = false;
            tmpData['total_body_parts'].forEach(total_body_part => {
              if (total_body_part.name == workout.bodypart_name) {
                flg = true;
                total_body_part.totalReps += parseInt(workout.reps);
                total_body_part.totalRm += rm_show ? parseFloat(workout.rm) : 0;
                total_body_part.totalExercise += 1;
                total_body_part.totalRmExercise += rm_show ? 1 : 0;
                total_body_part.totalLoad += rm_show ? workout.reps * workout.rm : 0;
              }
            });

            if (!flg) {
              tmpData['total_body_parts'].push({
                name: workout.bodypart_name,
                totalReps: parseInt(workout.reps),
                totalRm: rm_show ? parseFloat(workout.rm) : 0,
                totalExercise: 1,
                totalRmExercise: rm_show ? 1 : 0,
                totalLoad: rm_show ? workout.reps * workout.rm : 0
              });
            }
          }
        });

        temp.push(tmpData);
      });
      dataArray.push(temp);
    })

    this.data = dataArray;

    this.dataService.calculateStatistics();
    this.dataService.calculateOverloadGraphData();
    this.dataService.getProgressionModels();
    this.isLoading = false;
    this.spinner.hide();
  }

  checkValidation() {
    console.log('program = ', this.dataService.program);

    if (this.dataService.program.name == '' || this.dataService.program.name == null) {
      this.swal({
          title: 'Program is not completed!',
          text: 'Program name is empty.',
          icon: 'error',
          buttons: {
              confirm : {text: 'OK', className: 'btn-yellow-gradient'}
          }
        });
      return false;

    } else if (this.dataService.program.category == '' || this.dataService.program.category == null) {
      this.swal({
          title: 'Program is not completed!',
          text: 'Program category is empty',
          icon: 'error',
          buttons: {
              confirm : { text: 'OK', className: 'btn-yellow-gradient' }
          }
        });
      return false;

    } else if (this.dataService.program.split == '' || this.dataService.program.split == null) {
      this.swal({
          title: 'Program is not completed!',
          text: 'Program split is empty',
          icon: 'error',
          buttons: {
              confirm : { text: 'OK', className: 'btn-yellow-gradient' }
          }
        });
      return false;

    }

    // validation check
    let firstWeekPlans = [];
    let lastWeekPlans = [];
    let otherWeekPlans = [];
    for (let i = 0; i < this.weeks.length; i++) {
      let week = this.weeks[i];
      week.map((plan) => {
        if (plan == null || plan == 'null' || plan == '')
          return;

        if (i == 0)
          firstWeekPlans.push(plan);
        else if (i == this.weeks.length - 1)
          lastWeekPlans.push(plan);
        else
          otherWeekPlans.push(plan);
      })
    }

    // first, check if less than 3 test exercises are invloved in the first week and last week
    // and check if other weeks except first & last week contains test exercises
    let firstWeekTestExercises = [];
    let lastWeekTestExercises = [];

    console.log('>>> first week plans: ', firstWeekPlans);
    console.log('>>> last week plans: ', lastWeekPlans);
    console.log('>>> workouts: ', this.workouts);

    for (let i = 0; i < this.workouts.length; i++) {
      let workout = this.workouts[i];

      // check only test exercises
      if (workout.method != METHODS.TEST) continue;

      // first week test exercises
      if (firstWeekPlans.indexOf(workout.plan) != -1) {
        if (firstWeekTestExercises.indexOf(workout.exercise) != -1) {
          this.swal({
            title: 'Duplicated',
            text: 'The same test exercises exist on the first week',
            icon: 'error',
            buttons: {
                confirm : { text: 'OK', className: 'btn-yellow-gradient' }
            }
          });
          return false;
        }

        firstWeekTestExercises.push(workout.exercise);
      }

      // other week test exercises
      if (otherWeekPlans.indexOf(workout.plan) != -1) {
        this.swal({
          title: 'Not Allowed',
          text: 'Other weeks besides of first week and last week should be not allowed to include test exercises',
          icon: 'error',
          buttons: {
              confirm : { text: 'OK', className: 'btn-yellow-gradient' }
          }
        });
        return false;
      }

      // last week test exercises
      if (lastWeekPlans.indexOf(workout.plan) != -1) {
        if (lastWeekTestExercises.indexOf(workout.exercise) != -1) {
          this.swal({
            title: 'Duplicated',
            text: 'The same test exercises exist on the last week',
            icon: 'error',
            buttons: {
                confirm : { text: 'OK', className: 'btn-yellow-gradient' }
            }
          });
          return false;
        }

        lastWeekTestExercises.push(workout.exercise);
      }
    }

    console.log('----- first week test exercise length: ', firstWeekTestExercises.length)
    console.log('----- last week test exercise length: ', lastWeekTestExercises.length)

    // check if first week or last week includes no test exercises
    if (firstWeekTestExercises.length == 0 || lastWeekTestExercises.length == 0) {
      this.swal({
        title: 'No Test Exercises',
        text: 'The first week and the last week should include 1 ~ 3 exercises',
        icon: 'error',
        buttons: {
            confirm : { text: 'OK', className: 'btn-yellow-gradient' }
        }
      });
      return false;
    }

    // check if first week or last week includes more than 3 test exercises
    if (firstWeekTestExercises.length > 3 || lastWeekTestExercises.length > 3) {
      this.swal({
        title: 'Too Many Test Exercises',
        text: 'The first week or the last week should not include more than 3 exercises',
        icon: 'error',
        buttons: {
            confirm : { text: 'OK', className: 'btn-yellow-gradient' }
        }
      });
      return false;
    }


    // second, check if first week test exercises and last week test exercises are the same
    let isSameTestExercises = (firstWeekTestExercises.length == lastWeekTestExercises.length);
    firstWeekTestExercises.map((exercise) => {
      if (lastWeekTestExercises.indexOf(exercise) == -1)
        isSameTestExercises = false;
    })
    if (!isSameTestExercises) {
      this.swal({
        title: 'Not the same',
        text: 'The first week and last week should include the corresponding same test exercises',
        icon: 'error',
        buttons: {
            confirm : { text: 'OK', className: 'btn-yellow-gradient' }
        }
      });
      return false;
    }

    // check if the progrossion model is selected
    let emptyModels = 0;
    this.design_data.forEach(bodypart => {
      if (bodypart.exercise_type.length == 0)
        return false;

      if (this.progression_models[bodypart.name] == undefined || this.progression_models[bodypart.name] == '') {
        emptyModels++;
      }
    });

    if (emptyModels) {
      this.swal({
        title: 'Nonselected progression model',
        text: 'Please make a progression strategy.',
        icon: 'error',
        buttons: {
            confirm : { text: 'OK', className: 'btn-yellow-gradient' }
        }
      });
      return false;
    }

    return true;
  }

  getProgressionModelList() {
    let modelList = [];
    Object.keys(this.progression_models).forEach((key) => {
      modelList.push({ bodypart_name: key, progression_model: this.progression_models[key] });
    });

    return modelList;
  }

  onPublish() {
    if (this.checkValidation() == false) return;

    this.spinner.show();

    let workouts = [];
    for (let i = 0; i < this.weeks.length; i++) {
      for (let j = 0; j < this.weeks[i].length; j++) {
        for (let formData of this.data[i][j].body_parts) {
          for (let exercise of formData.exercises) {
            for (let workout of exercise.data) {
              workouts.push(workout)
            }
          }
        }
      }
    }

    this.http.post('program/restapi?info=save-program-progression', {
      program: this.dataService.program,
      program_id: this.dataService.cur_program_id,
      calendar: this.weeks,
      week_types: this.week_types,
      workouts: workouts,
      progression_models: this.getProgressionModelList(),
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }).subscribe(resp => {
      console.log('save result = ', resp);
      this.http.post('program/restapi?info=publish-program', {program_id: this.dataService.cur_program_id}, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }).subscribe(resp => {
        console.log('publish result = ', resp);
        this.spinner.hide();
        this.swal({
          title: 'Publish completed!',
          text: 'Program was published successfully.',
          icon: 'success',
          buttons: {
              confirm : { text: 'OK', className: 'btn-yellow-gradient' }
          }
        }).then((result) => {
          document.location.href="/#/profile";
        });
      });
    });


  }

  onSave() {
    if (this.checkValidation() == false) return;
    this.spinner.show();

    console.log('>>> this.data: ', this.data)

    let workouts = [];
    for (let i = 0; i < this.weeks.length; i++) {
      for (let j = 0; j < this.weeks[i].length; j++) {
        for (let formData of this.data[i][j].body_parts) {
          for (let exercise of formData.exercises) {
            for (let workout of exercise.data) {
              workouts.push(workout)
            }
          }
        }
      }
    }
    console.log('>>> this.workouts: ', this.workouts)
    console.log('>>> new workouts: ', workouts)

    this.http.post('program/restapi?info=save-program-progression', {
      program: this.dataService.program,
      program_id: this.dataService.cur_program_id,
      calendar: this.weeks,
      week_types: this.week_types,
      workouts: workouts,
      progression_models: this.getProgressionModelList(),
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }).subscribe(resp => {
      console.log('save result = ', resp);
      this.spinner.hide();
      this.swal({
        title: 'Save completed!',
        text: 'Program was saved successfully.',
        icon: 'success',
        buttons: {
            confirm : { text: 'OK', className: 'btn-yellow-gradient' }
        }
      }).then((result) => {
        document.location.href="/#/profile";
      });
    });
  }

  back(){
    this.cancel.emit(null);
  }

}
