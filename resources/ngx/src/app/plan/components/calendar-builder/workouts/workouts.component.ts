import {Component, OnInit, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DataService } from '../../../../data.service';
import {ApplicationUser} from 'src/app/core/classes/user';
import {Subscription} from 'rxjs';
import {MessageService} from '../../../../core/services/data.service';
import {ApplicationService} from '../../../../core/services/application.service';

import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NO_RM_EQUIPMENTS, RM_DATA, METHODS } from '../../../../constants';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'osg-plan-builder-workout',
  templateUrl: './workouts.component.html'
})

export class PlanBuilderWorkoutsComponent implements OnInit {
  public loading = true;

  noRMEquipments = NO_RM_EQUIPMENTS;

  get cur_program_id() {
    return this.dataService.cur_program_id;
  }
  set cur_program_id(val) {
    this.dataService.cur_program_id = val;
  }

  get program() {
    return this.dataService.program;
  }
  set program(val) {
    this.dataService.program = val;
  }

  get testable_exercises() {
    return this.dataService.testable_exercises;
  }

  // tslint:disable-next-line:max-line-length
  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private dataService: DataService, private messageService: MessageService, private readonly applicationService: ApplicationService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message.info === 'addExercise') {
        message = JSON.parse(message.text);
        // tslint:disable-next-line:forin
        for (const x in message) {
          this.addExercise(message[x]);
        }
      } else if (message.info === 'Workout') {
        message = JSON.parse(message.text);
      } else if (message.info === 'changeWorkout') {
        message = JSON.parse(message.text);
        this.curWorkout = message.workoutId;
        this.workout_number = message.workoutNumber;
        this.getExerciseInitData();
      }
    });
  }

  public options = [
    { name: '', value: 0 },
    { name: 'Straight set', value: 1 },
    { name: 'Warm up set', value: 2 },
    { name: 'Pyramid set', value: 4 },
    { name: 'Super set', value: 5 },
    { name: 'Giant set', value: 6 },
    { name: 'Pre-exhaust set', value: 7 },
    { name: 'Drop set', value: 8 },
  ];

  public optionsWithoutTest = [
    { name: '', value: 0 },
    { name: 'Straight set', value: 1 },
    { name: 'Warm up set', value: 2 },
    { name: 'Pyramid set', value: 4 },
    { name: 'Super set', value: 5 },
    { name: 'Giant set', value: 6 },
    { name: 'Pre-exhaust set', value: 7 },
    { name: 'Drop set', value: 8 },
  ];

  methods = METHODS;

  default_method = METHODS.STRAIGHT;
  default_tempo = '3-0-2-1';
  swal: SweetAlert = _swal as any;
  workout_number = null;
  exercise_list = [];
  cnt_workout = this.exercise_list.length;
  message: any = {};
  subscription: Subscription;
  @Input() applicationUser: ApplicationUser;
  user: any;
  curWorkout = null;
  selected_index: any;

  IsSameMuscle(one, two) {
    if (one === two) {
      return true;
    }
    const ones = JSON.parse(one);
    const twos = JSON.parse(two);
    for (let i = 0; i < ones.length; i++) {
      for (let j = 0; j < twos.length; j++) {
        if (ones[i]['muscle_id'] === twos[j]['muscle_id']) {
          return true;
        }
      }
    }
    return false;
  }

  getLinked(exercise_data, exercise_index, exercise, index) {
    if (exercise_index === 0 && index === 0) {
      return false;

    } else if (exercise['method'] == METHODS.PRE_EXHAUST && exercise_index > 0 && index === 0) {
      let _index = exercise_index - 1;
      let loopExData = exercise_data;
      let matched = 0;

      do {
        const prevExData = this.exercise_list[_index];
        if (prevExData['exercise_code'] !== loopExData['exercise_code']
          && prevExData.data[0]['method'] == METHODS.PRE_EXHAUST
          && this.IsSameMuscle(loopExData['target_muscles'], prevExData['target_muscles'])) {
          matched++;
          loopExData = prevExData;

        } else {
          break;
        }
        _index--;
      } while (_index >= 0);

      if (matched > 0 && matched % 2 === 1) {
        return true;
      }

    } else if (exercise['method'] == METHODS.SUPER && exercise_index > 0 && index === 0) {
      let _index = exercise_index - 1;
      let loopExData = exercise_data;
      let matched = 0;

      do {
        const prevExData = this.exercise_list[_index];
        if (prevExData.data[0]['method'] == METHODS.SUPER) {
          matched++;
          loopExData = prevExData;

        } else {
          break;
        }
        _index--;
      } while (_index >= 0);

      if (matched > 0 && matched % 2 === 1) {
        return true;
      }

    } else if (exercise['method'] == METHODS.GIANT && exercise_index > 0 && exercise_data.data.length === 1) {
      let _index = exercise_index - 1;
      let loopExData = exercise_data;
      let matched = 0;

      do {
        const prevExData = this.exercise_list[_index];
        if (prevExData['exercise_code'] !== loopExData['exercise_code']
          && prevExData.data.length === 1 && prevExData.data[0]['method'] == METHODS.GIANT
          && this.IsSameMuscle(loopExData['target_muscles'], prevExData['target_muscles'])) {
            matched++;
            loopExData = prevExData;

        } else {
          break;
        }
        _index--;
      } while (_index >= 0);

      if (matched > 0 && matched % 6 != 0) {
        return true;
      }

    } else if (exercise['method'] == METHODS.DROP && index > 0) {
      if (exercise_data.data[index - 1]['method'] == METHODS.DROP) {
        return true;
      }
    }

    return false;
  }

  shouldShowTestable(exercise_category) {
    const exercise_id = exercise_category.exercise_code;
    if (this.testable_exercises.indexOf(exercise_id) == -1)
      return false;

    return true;
  }

  shouldShowTest(exercise_category, index) {
    const exercise_id = exercise_category.exercise_code;
    if (this.testable_exercises.indexOf(exercise_id) == -1)
      return false;

    const exercises = exercise_category.data;
    if (exercises[exercises.length - 1].method != METHODS.TEST)
      return true;

    if (index == exercises.length - 1)
      return true;

    return false;
  }

  changeOption(event, option) {
    this.loading = true;

    const dataset = event.target.parentElement.parentElement.dataset;
    const exerciseIndex = parseInt(dataset.exerciseIndex, 0);
    const index = parseInt(dataset.index, 0);
    const exercise = this.exercise_list[exerciseIndex];
    const currentSet = exercise['data'][index];
    const value = parseInt(event.target.value, 0);
    let newValue = value.toString();

    if (option === 'rtf') {
      if (currentSet['method'] == METHODS.TEST) {
        newValue = '0';
      } else if (!(0 <= value && value <= 5)) {
        newValue = '';
      }

    } else if (option === 'reps') {
      if (!(1 <= value && value <= 20)) {
        newValue = '';

      } else if (currentSet['method'] == METHODS.TEST) {
        console.log('>>> value: ', value);
        if (value < 1)
          newValue = '1';
        else if (value > 5)
          newValue = '5';

        console.log('>>> new value: ', newValue);
      }

    } else if (option === 'method') {
      if (value == METHODS.TEST) {
        currentSet['rtf'] = '0';
        currentSet['reps'] = '5';

        // set the last set as current test set and set method warm up and reps:5, RTF:4 of other sets
        for (let i = 0; i < exercise['data'].length; i++) {
          if (i == index) continue;

          exercise['data'][i]['method'] = METHODS.WARM_UP;
          exercise['data'][i]['rtf'] = '4';
          exercise['data'][i]['reps'] = '5';
          exercise['data'][i]['rm'] = RM_DATA[exercise['data'][i]['rtf']][exercise['data'][i]['reps'] - 1].toFixed(2);
          if (i > index) {
            exercise['data'][i - 1] = exercise['data'][i];
          }
        }
        exercise['data'][exercise['data'].length - 1] = currentSet;

      } else if (value == METHODS.DROP) {
        currentSet['rest'] = '0:00';
      }

    } else if (option === 'rest') {
      newValue = event.target.value;
      if (newValue !== '' && newValue !== null) {
        const values = newValue.split(':');
        if (values.length > 1) {
          var sec = parseInt(values[1], 0) % 100;
          newValue = (parseInt(values[0], 0) % 100) + ':' + (sec < 10 ? '0' + sec : sec);
        } else if (values.length > 0) {
          newValue = (parseInt(values[0], 0) % 100) + ':00';
        } else {
          newValue = '0:00';
        }
      }

    } else if (option === 'tempo') {
      newValue = event.target.value;
    }

    currentSet[option] = newValue;

    if (currentSet['rtf'] !== '' && currentSet['reps'] !== '' && exercise.rm_show) {
      currentSet['rm'] = RM_DATA[currentSet['rtf']][currentSet['reps'] - 1].toFixed(2);
    } else {
      currentSet['rm'] = '';
    }

    this.refreshRMData();
  }

  refreshRMData() {
    const self = this;
    this.exercise_list.forEach(function (exercise, exerciseIndex) {
      exercise['data'].forEach(function (data, index) {
        self.setRMData(index, exerciseIndex);
      });
    });
  }

  setRMDataForSet(current, previous) {
    let reduce_percent = 0;
    const sec = this.getSecFromPeriod(previous['rest']);

    if (sec >= 0 && sec <= 29) {
      reduce_percent = 8;
    } else if (sec >= 30 && sec <= 59) {
      reduce_percent = 7;
    } else if (sec >= 60 && sec <= 89) {
      reduce_percent = 6;
    } else if (sec >= 90 && sec <= 119) {
      reduce_percent = 5;
    } else if (sec >= 120 && sec <= 149) {
      reduce_percent = 4;
    } else if (sec >= 150 && sec <= 179) {
      reduce_percent = 3;
    } else if (sec >= 180) {
      reduce_percent = 0;
    }

    const rmValue = RM_DATA[current['rtf']][current['reps'] - 1];
    current['rm'] = (rmValue * (100 - reduce_percent) / 100).toFixed(2);
  }

  setRMData(index, exerciseIndex) {
    console.log('setRMData');
    const currentExercise = this.exercise_list[exerciseIndex];
    const currentSet = currentExercise['data'][index];

    if (currentSet['rtf'] === '' ||
      currentSet['rtf'] === null ||
      currentSet['reps'] === '' ||
      currentSet['reps'] === null) {
      return;
    }

    // no need if rm show is false
    if (!currentExercise.rm_show) {
      return;
    }

    currentSet['rm'] = RM_DATA[currentSet['rtf']][currentSet['reps'] - 1];

    if (exerciseIndex > 0 && index === 0) {
      const previousExercise = this.exercise_list[exerciseIndex - 1];
      if (this.IsSameMuscle(currentExercise['target_muscles'], previousExercise['target_muscles'])) {
        this.setRMDataForSet(currentSet, previousExercise['data'][previousExercise['data'].length - 1]);
      }

    } else if (index > 0) {
      this.setRMDataForSet(currentSet, currentExercise['data'][index - 1]);

    }
  }

  getSecFromPeriod(period) {
    if (period === '' || period === null) {
      return -1;
    }
    period = period.split(':');
    if (period.length > 1) {
      return parseInt(period[0], 0) * 60 + parseInt(period[1], 0);
    } else if (period.length > 0) {
      return parseInt(period[0], 0) * 60;
    }

    return -1;
  }

  async ngOnInit(): Promise<void> {
    this.getExerciseInitData();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  allowDrop(e) {
    e.preventDefault();
  }

  drop(e) {
    e.preventDefault();
    console.log('>>> e: ', e);
    console.log('>>> e.dataTransfer: ', e.dataTransfer);
    let data = e.dataTransfer.getData('text');
    console.log('>>> data: ', data);
    data = JSON.parse(data);
    this.addExercise(data);
  }

  addExercise(data) {
    this.exercise_list.push({
      'exercise_code': parseInt(data.exerciseCode, 0),
      'name': data.exerciseName,
      'target_muscles': data.targetMuscles,
      'rm_show': NO_RM_EQUIPMENTS.findIndex(equipment => data.equipmentName == equipment) == -1 ? true : false,
      'selected': 0,
      'data': [{
        'reps': '',
        'rtf': '',
        'rm': '',
        'method': this.default_method,
        'tempo': this.default_tempo,
        'rest': '3:00'
      }]
    });

    console.log('>>> exercises ', this.exercise_list);

    this.cnt_workout = this.exercise_list.length;
  }

  addRecord(event) {
    console.log('>>> add record: ', event)
    const exerciseIndex = event.target.parentElement.parentElement.parentElement.dataset.exerciseIndex;
    const _exercise = this.exercise_list[exerciseIndex];
    const _exerciseData = _exercise['data'];
    const _prevOne = _exerciseData[_exerciseData.length - 1];

    console.log('>>> _prevOne record: ', _prevOne)
    const willAddItem = {
      'reps': _prevOne['reps'],
      'rtf': _prevOne['rtf'],
      'rm': _prevOne['rm'],
      'method': _prevOne['method'],
      'tempo': _prevOne['tempo'],
      'rest': _prevOne['rest']
    };

    if (_prevOne['method'] == METHODS.DROP) {
      willAddItem['rest'] = '0:00';
    }

    if (_prevOne['method'] != METHODS.DROP || _exerciseData.length < 6) {
      if (_prevOne['method'] == METHODS.TEST) {
        console.log('>>> prev test method')
        willAddItem['method'] = METHODS.WARM_UP;
        willAddItem['rtf'] = "4";
        willAddItem['reps'] = "5";
        willAddItem['rm'] = RM_DATA[willAddItem['rtf']][willAddItem['reps'] - 1].toFixed(2);
        this.exercise_list[exerciseIndex]['data'].splice(_exerciseData.length - 1, 0, willAddItem);

      } else {
        this.exercise_list[exerciseIndex]['data'].push(willAddItem);
      }
    }

    this.refreshRMData();
  }

  removeRecord(event) {
    const exerciseIndex = event.target.parentElement.parentElement.parentElement.dataset.exerciseIndex;
    this.exercise_list[exerciseIndex]['data'].pop();
    if (this.exercise_list[exerciseIndex]['data'].length === 0) {
      this.exercise_list.splice(exerciseIndex, 1);
    }
    this.cnt_workout = this.exercise_list.length;
  }

  onSelectExercise(exercise_index) {
    this.exercise_list = this.exercise_list.map(function (item) {
      return {...item, selected: 0};
    });
    if (this.selected_index === exercise_index) {
      this.exercise_list[exercise_index].selected = 0;
      this.selected_index = -1;
    } else {
      this.exercise_list[exercise_index].selected = 1;
      this.selected_index = exercise_index;
    }
  }

  onRemoveExercise() {
    this.exercise_list = this.exercise_list.filter(function (value, index, arr) {
        return value.selected === 0;
      }
    );
    this.cnt_workout = this.exercise_list.length;
  }

  onNewWorkout() {
    this.swal({
      title: 'Are you sure?',
      text: 'You will lose the unsaved workout data.',
      icon: 'warning',
      buttons: {
        confirm: {text: 'YES', className: 'btn-yellow-gradient', value: true},
        cancel: {text: 'NO', className: 'btn-black', value: false, visible: true}
      }
    }).then((result) => {
      if (result) {
        this.clearData();
      }
    });
  }

  onDeleteWorkout() {
    this.swal({
      title: 'Are you sure?',
      text: 'You cannot revert after delete the workout.',
      icon: 'warning',
      buttons: {
        confirm: {text: 'YES', className: 'btn-yellow-gradient', value: true},
        cancel: {text: 'NO', className: 'btn-black', value: false, visible: true}
      }
    }).then((result) => {
      if (result) {
        if (this.curWorkout != null) {
          this.spinner.show();
          this.http.post('remove/workout', {workoutId: this.curWorkout}, {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          }).subscribe(resp => {
            if (resp != null && resp['success'] != null) {
              const data = {};
              this.messageService.sendMessage('deleteWorkout', JSON.stringify(data));
              this.swal({
                title: 'Delete completed!',
                text: 'The workout was deleted successfully.',
                icon: 'success',
                buttons: {
                  confirm: {text: 'OK', className: 'btn-yellow-gradient'}
                }
              });
              this.clearData();
              this.spinner.hide();
            }
          });
        } else {
          this.clearData();
        }
      }
    });
  }

  clearData() {
    this.curWorkout = null;
    this.workout_number = null;
    this.exercise_list = [];
    this.cnt_workout = 0;
    this.message = {};
    this.selected_index = null;
    this.refreshRMData();
  }

  onSaveWorkout() {
    if (this.cnt_workout === 0) {
      this.swal({
        title: 'You didn\'t complete!',
        text: 'Please fill in gaps before saving the workout.',
        icon: 'error',
        buttons: {
          confirm: {text: 'OK', className: 'btn-yellow-gradient'}
        }
      });
      return;
    }


    // tslint:disable-next-line:forin
    for (const x in this.exercise_list) {
      for (const i in this.exercise_list[x]['data']) {
        // tslint:disable-next-line:max-line-length
        if (this.exercise_list[x]['data'][i]['reps'] === '' || this.exercise_list[x]['data'][i]['rtf'] === '' || this.exercise_list[x]['data'][i]['tempo'] === '' || this.exercise_list[x]['data'][i]['rest'] === '') {

          this.swal({
            title: 'You didn\'t complete!',
            text: 'Please fill in the gaps before saving the workout.',
            icon: 'error',
            buttons: {
              confirm: {text: 'OK', className: 'btn-yellow-gradient'}
            }
          });
          return;
        }
      }
    }

    if (this.cur_program_id == -1) {
      this.spinner.show();
      this.http.post('program/restapi?info=create-program', {}, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }).subscribe(resp => {
        console.log('create program = ', resp['program_id']);
        this.cur_program_id = parseInt(resp['program_id']);
        this.http.post('add/workout', {data: this.exercise_list, planId: this.curWorkout, program_id: this.cur_program_id}, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        }).subscribe(resp => {
          if (resp != null && resp['success'] != null) {
            const data = {};
            this.messageService.sendMessage('saveWorkout', JSON.stringify(data));
            this.swal({
              title: 'Save completed!',
              text: 'The workout was saved successfully.',
              icon: 'success',
              buttons: {
                confirm: {text: 'OK', className: 'btn-yellow-gradient'}
              }
            });
            this.spinner.hide();
          }
        });
      });

    } else {
      this.http.post('add/workout', {data: this.exercise_list, planId: this.curWorkout, program_id: this.cur_program_id}, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }).subscribe(resp => {
        if (resp != null && resp['success'] != null) {
          const data = {};
          this.messageService.sendMessage('saveWorkout', JSON.stringify(data));
          this.swal({
            title: 'Save completed!',
            text: 'The workout was saved successfully.',
            icon: 'success',
            buttons: {
              confirm: {text: 'OK', className: 'btn-yellow-gradient'}
            }
          });
          this.spinner.hide();
        }
      });
    }
  }

  getExerciseInitData() {
    if (this.curWorkout !== null) {
      this.spinner.show();
      this.http.post('program/restapi?info=get-workout', {workoutId: this.curWorkout}, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }).subscribe(resp => {
        if (resp != null && resp['success'] != null) {
          this.exercise_list = resp['data'];
          this.exercise_list.forEach(element => {
            element.rm_show = NO_RM_EQUIPMENTS.findIndex(equipment => element.equipment_name == equipment) == -1 ? true : false;
          });
          console.log('>>> exercise list: ', this.exercise_list);
          this.cnt_workout = this.exercise_list.length;
          this.spinner.hide();
        }
      });
    }
  }

  onMoveExercise(event) {
    event.preventDefault();
  }

  onMoveExerciseDown(event) {
    event.preventDefault();
  }

  onMoveUp() {
    if (this.selected_index === 0 || this.selected_index === -1) {
      return;
    }
    const selected_exercise = this.exercise_list.splice(this.selected_index, 1);
    this.exercise_list.splice(this.selected_index - 1, 0, selected_exercise[0]);
    this.selected_index = this.selected_index - 1;
    this.refreshRMData();
  }

  onMoveDown() {
    if (this.selected_index === this.exercise_list.length - 1 || this.selected_index === -1) {
      return;
    }
    const selected_exercise = this.exercise_list.splice(this.selected_index, 1);
    this.exercise_list.splice(this.selected_index + 1, 0, selected_exercise[0]);
    this.selected_index = this.selected_index + 1;
    this.refreshRMData();
  }
}
