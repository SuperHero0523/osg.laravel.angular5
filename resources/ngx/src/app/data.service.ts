import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PUBLIC_BODYPARTS, NO_RM_EQUIPMENTS, WEEK_TYPE_OPTIONS } from './constants';
import { HttpClient } from '@angular/common/http';
import { ProgressionModels, Weeks } from './types';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedData = [];
  weeks: Weeks;
  calendar_list : any;
  week_types = [];
  plans = [];
  workouts = [];
  progression_models: ProgressionModels = {};

  design_data = [];
  private design_data_subject = new Subject<any>();
  design_data_change$ = this.design_data_subject.asObservable();

  graph_data = [];
  private graph_data_subject = new Subject<any>();
  graph_data_change$ = this.graph_data_subject.asObservable();

  cur_program_id = -1;
  testable_exercises = [];
  program = {
    name: '',
    category: '',
    split: '',
    description: ''
  };
  first_program: any = {};
  public first_program_subject = new Subject<any>();
  first_program_change$ = this.first_program_subject.asObservable();

  published_programs: any = [];
  public published_programs_subject = new Subject<any>();
  published_programs_change$ = this.published_programs_subject.asObservable();

  cur_week = 0;
  cur_day = 0;
  cur_body_part = '';

  week_start_date = ""

  reviews = [];

  applicationUser: any = {};

  profile_user = -1;
  from_other_profile = false;

  program_designs_page_env = "";

  private weekdays = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ];

  constructor(private http: HttpClient) { }

  calculateStatistics() {
    console.log('---- calculateStatistics')
    var temp = [];
    PUBLIC_BODYPARTS.forEach(part => {
      temp.push({
        name: part,
        test_exercise: '',
        exercise_type: [],
        reps_min: -1,
        reps_max: -1,
        rm_min: -1,
        rm_max: -1,
        rtf_min: -1,
        rtf_max: -1,
        rest_min: -1,
        rest_max: -1,
        tempo_min: -1,
        tempo_max: -1,
        // sets_min: -1,
        // sets_max: -1
      });
    })
    this.sharedData.forEach(week => {
      week.forEach(day => {
        day.body_parts.forEach(body_part => {
          var idx = this.isInArrayWithProp(temp, 'name', body_part.name);
          if (idx >= 0) {
            body_part.exercises.forEach(exercise_set => {
              exercise_set.data.forEach(exercise => {
                if (this.isInArray(temp[idx].exercise_type, exercise.movement) < 0 ) {
                  temp[idx].exercise_type.push(exercise.movement);
                }

                if (parseInt(exercise.reps) < parseInt(temp[idx].reps_min) || temp[idx].reps_min == -1) {
                  temp[idx].reps_min = exercise.reps;
                }
                if (parseInt(exercise.reps) > parseInt(temp[idx].reps_max) || temp[idx].reps_max == -1) {
                  temp[idx].reps_max = exercise.reps;
                }

                if (NO_RM_EQUIPMENTS.findIndex(equipment => exercise_set.equipmentName == equipment) == -1 && exercise.rm != null
                  && (parseFloat(exercise.rm) < parseFloat(temp[idx].rm_min) || temp[idx].rm_min == -1)) {
                  temp[idx].rm_min = Math.round(parseFloat(exercise.rm));
                }
                if (NO_RM_EQUIPMENTS.findIndex(equipment => exercise_set.equipmentName == equipment) == -1 && exercise.rm != null
                  && (parseFloat(exercise.rm) > parseFloat(temp[idx].rm_max) || temp[idx].rm_max == -1)) {
                  temp[idx].rm_max = Math.round(parseFloat(exercise.rm));
                }

                if (parseInt(exercise.rtf) < parseInt(temp[idx].rtf_min) || temp[idx].rtf_min == -1) {
                  temp[idx].rtf_min = exercise.rtf;
                }
                if (parseInt(exercise.rtf) > parseInt(temp[idx].rtf_max) || temp[idx].rtf_max == -1) {
                  temp[idx].rtf_max = exercise.rtf;
                }

                if ((temp[idx].rest_min != -1 && exercise.rest.length < temp[idx].rest_min.length && exercise.rest < temp[idx].rest_min) || temp[idx].rest_min == -1) {
                  temp[idx].rest_min = exercise.rest;
                }
                if ((temp[idx].rest_max != -1 && exercise.rest.length > temp[idx].rest_max.length && exercise.rest > temp[idx].rest_max) || temp[idx].rest_max == -1) {
                  temp[idx].rest_max = exercise.rest;
                }

                if ((temp[idx].tempo_min != -1 && exercise.tempo.length < temp[idx].tempo_min.length && exercise.tempo < temp[idx].tempo_min) || temp[idx].tempo_min == -1) {
                  temp[idx].tempo_min = exercise.tempo;
                }
                if ((temp[idx].tempo_max != -1 && exercise.tempo.length > temp[idx].tempo_max.length && exercise.tempo > temp[idx].tempo_max) || temp[idx].tempo_max == -1) {
                  temp[idx].tempo_max = exercise.tempo;
                }

                if (exercise.method == '3') {
                  if(!temp[idx].test_exercise.includes(exercise.name)) {
                    temp[idx].test_exercise += exercise.name + ', ';
                  }
                }
              });
              // if(exercise_set.data.length < temp[idx].sets_min || temp[idx].sets_min == -1) {
              //   temp[idx].sets_min = exercise_set.data.length;
              // }
              // if(exercise_set.data.length > temp[idx].sets_max || temp[idx].sets_max == -1) {
              //   temp[idx].sets_max = exercise_set.data.length;
              // }
            });
          } else {
            temp.push({
              name: body_part.name,
              test_exercise: '',
              exercise_type: [],
              reps_min: -1,
              reps_max: -1,
              rm_min: -1,
              rm_max: -1,
              rtf_min: -1,
              rtf_max: -1,
              rest_min: -1,
              rest_max: -1,
              tempo_min: -1,
              tempo_max: -1,
              // sets_min: -1,
              // sets_max: -1
            });
            body_part.exercises.forEach(exercise_set => {
              exercise_set.data.forEach(exercise => {
                if (this.isInArray(temp[temp.length-1].exercise_type, exercise.movement) < 0 ) {
                  temp[temp.length-1].exercise_type.push(exercise.movement);
                }

                if (exercise.reps < temp[temp.length-1].reps_min || temp[temp.length-1].reps_min == -1) {
                  temp[temp.length-1].reps_min = exercise.reps;
                }
                if (exercise.reps > temp[temp.length-1].reps_max || temp[temp.length-1].reps_max == -1) {
                  temp[temp.length-1].reps_max = exercise.reps;
                }

                if (NO_RM_EQUIPMENTS.findIndex(equipment => exercise_set.equipmentName == equipment) == -1 && exercise.rm != null
                  && (exercise.rm < temp[temp.length - 1].rm_min || temp[temp.length - 1].rm_min == -1)) {
                  temp[temp.length-1].rm_min = exercise.rm;
                }
                if (NO_RM_EQUIPMENTS.findIndex(equipment => exercise_set.equipmentName == equipment) == -1 && exercise.rm != null
                  && (exercise.rm > temp[temp.length - 1].rm_max || temp[temp.length - 1].rm_max == -1)) {
                  temp[temp.length-1].rm_max = exercise.rm;
                }

                if(exercise.rtf < temp[temp.length-1].rtf_min || temp[temp.length-1].rtf_min == -1) {
                  temp[temp.length-1].rtf_min = exercise.rtf;
                }
                if(exercise.rtf > temp[temp.length-1].rtf_max || temp[temp.length-1].rtf_max == -1) {
                  temp[temp.length-1].rtf_max = exercise.rtf;
                }

                if(exercise.rest < temp[temp.length-1].rest_min || temp[temp.length-1].rest_min == -1) {
                  temp[temp.length-1].rest_min = exercise.rest;
                }
                if(exercise.rest > temp[temp.length-1].rest_max || temp[temp.length-1].rest_max == -1) {
                  temp[temp.length-1].rest_max = exercise.rest;
                }

                if(exercise.tempo < temp[temp.length-1].tempo_min || temp[temp.length-1].tempo_min == -1) {
                  temp[temp.length-1].tempo_min = exercise.tempo;
                }
                if(exercise.tempo > temp[temp.length-1].tempo_max || temp[temp.length-1].tempo_max == -1) {
                  temp[temp.length-1].tempo_max = exercise.tempo;
                }

                if(exercise.method == '3') {
                  if(!temp[temp.length-1].test_exercise.includes(exercise.name)) {
                    temp[temp.length-1].test_exercise +=exercise.name + ', ';
                  }
                }
              });
              // if(exercise_set.data.length < temp[temp.length-1].sets_min || temp[temp.length-1].sets_min == -1) {
              //   temp[temp.length-1].sets_min = exercise_set.data.length;
              // }
              // if(exercise_set.data.length > temp[temp.length-1].sets_max || temp[temp.length-1].sets_max == -1) {
              //   temp[temp.length-1].sets_max = exercise_set.data.length;
              // }
            });
          }
        });
      });
    });

    temp.forEach(bodypart => {
      bodypart.sets_min = -1;
      bodypart.sets_max = -1;
      bodypart.freq_min = -1;
      bodypart.freq_max = -1;
      this.sharedData.forEach(week => {
        var cnt_bodypart = 0;
        week.forEach(day => {
          day.body_parts.forEach(body_part => {
            var cnt = 0;
            if (bodypart.name == body_part.name) {
              cnt_bodypart++;
              body_part.exercises.forEach(exercise_set => {
                cnt += exercise_set.data.length;
              });
            }
            if (cnt != 0) {
              if (cnt < bodypart.sets_min || bodypart.sets_min == -1) {
                bodypart.sets_min = cnt;
              }
              if (cnt > bodypart.sets_max || bodypart.sets_max == -1) {
                bodypart.sets_max = cnt;
              }
            }
          });
        });

        if (cnt_bodypart < bodypart.freq_min || bodypart.freq_min == -1) {
          bodypart.freq_min = cnt_bodypart;
        }
        if (cnt_bodypart > bodypart.freq_max || bodypart.freq_max == -1) {
          bodypart.freq_max = cnt_bodypart;
        }
      });
    })

    this.design_data = temp;
    this.design_data_subject.next();

    console.log('design data = ', temp);
    console.log('workouts = ', this.workouts);
    // this.isLoading = false;
  }

  getProgressionModels() {

    let program_id = this.cur_program_id;
    if (program_id == -1) {
      if (this.first_program !=undefined && this.first_program.name != undefined)
        program_id = this.first_program.id;
    }

    if (this.first_program !=undefined && window.location.href.indexOf("profile") != -1)
      program_id = this.first_program.id;

    // if no published program
    if (program_id == undefined || program_id == -1) {
      this.progression_models = {};
      return;
    }

    this.http.get('/progression/getProgressionModels?program_id=' + program_id).subscribe((resp: any) => {
      console.log('>>> get progression model api response: ', resp);

      if (resp.success == false) {
        console.log('>>> get progression model api failed');
        return;
      }

      this.progression_models = {};
      resp.result.forEach(model_info => {
        this.progression_models[model_info.bodypart_name] = model_info.progression_model;
      });

    })
  }

  isInArrayWithProp(ary, prop, val) {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i][prop] == val) {
        return i;
      }
    }
    return -1;
  }

  isInArray(ary, val) {
    for (var i = 0; i < ary.length; i++){
      if (ary[i] == val) {
        return i;
      }
    }
    return -1;
  }

  calculateOverloadGraphData() {
    console.log('>>> design_data: ', this.design_data);
    console.log(">>> shared data: ", this.sharedData);
    this.design_data.forEach((bodypart, index) => {
      this.graph_data[index] = {
        name: bodypart.name,
        x: [],
        total_volume : ['total_volume'],
        total_load: ['total_load'],
        average_rm: ['average_rm'],
        frequency: ['frequency'],
        empty: true,
      }

      this.sharedData.forEach(week => {
        week.forEach((day, day_index) => {
          var flg = true;
          this.graph_data[index].x.push(this.weekdays[day_index]);
          if (day.total_body_parts != undefined) {
            day.total_body_parts.forEach((body_part, part_index) => {
              if (bodypart.name == body_part.name) {
                flg = false;
                this.graph_data[index].total_volume.push(body_part ? body_part.totalReps * 10 : null);
                this.graph_data[index].total_load.push(body_part ? body_part.totalLoad.toFixed(2) : null);
                this.graph_data[index].average_rm.push(body_part ? (body_part.totalRm / body_part.totalExercise).toFixed(2) : null);
                this.graph_data[index].empty = false;
              }
            });
          } else {
            day.body_parts.forEach((body_part, part_index) => {
              if (bodypart.name == body_part.name) {
                flg = false;
                this.graph_data[index].total_volume.push(body_part ? body_part.totalReps * 10 : null);
                this.graph_data[index].total_load.push(body_part ? body_part.totalLoad.toFixed(2) : null);
                this.graph_data[index].average_rm.push(body_part ? (body_part.totalRm / body_part.totalExercise).toFixed(2) : null);
                this.graph_data[index].empty = false;
              }
            });

          }
          if (flg) {
            this.graph_data[index].total_volume.push(null);
            this.graph_data[index].total_load.push(null);
            this.graph_data[index].average_rm.push(null);
          }
        });
      });
    });

    console.log('graph data = ', this.graph_data);
    this.graph_data.forEach(body_part => {
      body_part.frequency = ["frequency"];
      var freq = 0;
      var cnt = 0;
      let validIndexes = [];
      body_part.average_rm.forEach((data, index) => {
        if (index != 0) {
          if (data) {
            freq++;
            validIndexes.push(index);
          }
          body_part.frequency.push(null);

          if (index % 7 == 0) {
            let setValue = freq ? (freq * (100 / 7)).toFixed(0) : null;
            validIndexes.forEach(valid_index => {
              body_part.frequency[valid_index] = setValue;
            });
            validIndexes = [];
            freq = 0;
          }

        }
        cnt++;
      });
    })

    let program_id = 0;
    if (window.location.href.indexOf("profile") != -1) {
      if (this.first_program != undefined && this.first_program.name != undefined) {
        program_id = this.first_program.id;
      }
    } else if (window.location.href.indexOf("calendar-builder") != -1) {
      if (this.cur_program_id != undefined) {
        program_id = this.cur_program_id;
      }
    }

    if (program_id > 0) {
      this.http.get('/progression/getWeekTypes?program_id=' + program_id).subscribe((resp: any) => {
        console.log('>>> progression/getWeekTypes: ', resp);
        this.week_types = resp.week_types;
        if (this.week_types[0] == null) {
          this.week_types[0] = WEEK_TYPE_OPTIONS[0];
          this.week_types[this.week_types.length - 1] = WEEK_TYPE_OPTIONS[0];
          for (let i = 1; i < this.week_types.length - 1; i++)
            this.week_types[i] = WEEK_TYPE_OPTIONS[1];
        }
      })
    } else {
      this.week_types = [];
    }

    this.graph_data_subject.next();
  }
}
