import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../../../data.service';
import { RM_DATA, METHODS, WEEK_TYPE_OPTIONS } from '../../../../constants';

@Component({
    selector: 'osg-progression-builder-training-program',
    templateUrl: './training-program.component.html'
})
export class ProgressionBuilderTrainingProgramComponent implements OnInit {
  deltaX: number = 912;
  left: number = 0;
  rate: number = 1;
  min_rate: number = 0.5;
  max_rate: number = 1.5;

  // weeks = [];
  // plans = [];
  // workouts = [];
  // public data = [];
  isLoading = true;
  idx = 1;

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

  get design_data_change() {
    return this.dataService.design_data_change$;
  }

  get cur_body_part() {
    return this.dataService.cur_body_part;
  }
  set cur_body_part(val) {
    this.dataService.cur_body_part = val;
  }

  get calendar_list() {
    return this.dataService.calendar_list;
  }

  get testable_exercises() {
    return this.dataService.testable_exercises;
  }

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private dataService: DataService) {
  }

  public bgColor = "";

  public options = [
    { name: '', value: 0 },
    { name: 'Straight set', value: 1 },
    { name: 'Warm up set', value: 2 },
    { name: 'Test (AMRAP) set', value: 3 },
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

  public days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  public week_type_options = WEEK_TYPE_OPTIONS;

  methods = METHODS;

  @ViewChild('trainingProgramWrapper') wrapper: ElementRef;

  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {

    this.design_data_change.subscribe((change) => {
      console.log("---- design data changed ", JSON.stringify(this.week_types));

      if (this.week_types[0] == null) {
        this.weeks.forEach((week, index) => {
          this.setWeekType(index, 1);
        })
      }
      console.log("---- week_types: ", JSON.stringify(this.week_types));
    });
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

  setWeekType(index, type) {
    if (index == 0 || index == this.weeks.length - 1) {
      this.week_types[index] = this.week_type_options[0];

    } else {
      this.week_types[index] = this.week_type_options[type];
    }
  }

  setDayIndex(val) {
    this.idx = val;
  }
  incDayIndex() {
    return this.idx++;
  }

  getPlanName(day) {
    var name = '';
    for(var i=0;i<this.plans.length;i++) {
      if(this.plans[i].id == day) {
        name = this.plans[i].body_parts;
        break;
      }
    }
    return name;
  }

  getPlanId(day) {
    var id = -1;
    for(var i=0;i<this.plans.length;i++) {
      if(this.plans[i].id == day) {
        id = this.plans[i].plan_id;
        break;
      }
    }
    return id;
  }

  calculateTotal() {
    this.data.forEach(week => {
      week.forEach(day => {
        day.total_body_parts.forEach(total_body_part => {
          total_body_part.totalReps = 0;
          total_body_part.totalRm = 0;
          total_body_part.totalExercise = 0;
          total_body_part.totalRmExercise = 0;
          total_body_part.totalLoad = 0;

          day.body_parts.forEach(body_part => {
            if (total_body_part.name == body_part.name) {
              body_part.exercises.forEach(exercise => {
                exercise.data.forEach(data => {
                  total_body_part.totalExercise++;
                  total_body_part.totalReps += parseInt(data.reps);
                  total_body_part.totalRm += exercise.rm_show ? parseFloat(data.rm) : 0;
                  total_body_part.totalRmExercise += exercise.rm_show ? 1 : 0;
                  total_body_part.totalLoad += exercise.rm_show ? data.reps * data.rm : 0;
                });
              });
            }
          });
        })
      });
    });
  }

  getDetailedIdForNewItem() {
    let newDetailedId = -1;
    while (true) {
      let bExistID = false;
      this.workouts.map(item => {
        if (item.detail_id == newDetailedId) {
          bExistID = true;
        }
      })

      if (!bExistID)
        return newDetailedId;

      newDetailedId--;
    }
  }

  addRecord(weekIndex, dayIndex, bodypartIndex, exerciseIndex) {
    // const weekIndex = event.target.parentElement.parentElement.dataset.weekIndex;
    // const dayIndex = event.target.parentElement.parentElement.dataset.dayIndex;
    // const bodypartIndex = event.target.parentElement.parentElement.dataset.bodypartIndex;
    // const exerciseIndex = event.target.parentElement.parentElement.dataset.exerciseIndex;
    const _exercise = this.data[weekIndex][dayIndex].body_parts[bodypartIndex].exercises[exerciseIndex];
    const _exerciseData = _exercise['data'];
    const _prevOne = _exerciseData[_exerciseData.length - 1];

    const willAddItem = {
      ..._prevOne,
      id: -1
    };

    if (_prevOne['method'] == METHODS.DROP) {
      willAddItem['rest'] = '0:00';
    }

    console.log('>>> _exercise Data: ', _exerciseData)

    if (_prevOne['method'] != METHODS.DROP || _exerciseData.length < 6) {

      // get first index for exercise
      let firstExerciseIndex = -1;
      for (let i = 0; i < this.workouts.length; i++) {
        if (this.workouts[i].detail_id == _exerciseData[0].detail_id) {
          firstExerciseIndex = i;
          break;
        }
      }

      console.log('>>> first index: ', firstExerciseIndex);
      console.log('>>> length: ', _exerciseData.length);

      const length = _exerciseData.length;
      willAddItem.detail_id = this.getDetailedIdForNewItem();
      if (_prevOne['method'] == METHODS.TEST) {
        console.log('>>> prev test method')
        willAddItem['method'] = METHODS.WARM_UP;
        willAddItem['rtf'] = "4";
        willAddItem['reps'] = "5";
        willAddItem['rm'] = RM_DATA[willAddItem['rtf']][willAddItem['reps'] - 1].toFixed(2);

        _exerciseData.splice(length - 1, 0, willAddItem);
        this.workouts.splice(firstExerciseIndex + length - 1, 0, willAddItem)

      } else {
        _exerciseData.push(willAddItem);
        this.workouts.splice(firstExerciseIndex + length, 0, willAddItem)
      }

      _exercise.row++;
      this.data[weekIndex][dayIndex].body_parts[bodypartIndex].row++;

      this.refresh(weekIndex, dayIndex, bodypartIndex);
      console.log('data = ', this.data);
      console.log('workouts = ', this.workouts);
    }
  }

  removeRecord(weekIndex, dayIndex, bodypartIndex, exerciseIndex) {

    console.log(`weekIndex: ${weekIndex}, dayIndex: ${dayIndex}, bodypartIndex: ${bodypartIndex}, exerciseIndex: ${exerciseIndex}`)
    const _exercise = this.data[weekIndex][dayIndex].body_parts[bodypartIndex].exercises;
    const _exerciseData = _exercise[exerciseIndex]['data'];

    _exercise[exerciseIndex].row--;
    this.data[weekIndex][dayIndex]['body_parts'][bodypartIndex].row--;

    var removed = _exerciseData.pop();
    var temp = [];
    this.workouts.forEach(item => {
      if(item.detail_id != removed.detail_id) {
        temp.push(item);
      }
    })
    this.workouts = temp;

    if(_exerciseData.length === 0) {
      _exercise.splice(exerciseIndex, 1);
    }
    if(_exercise.length === 0) {
      this.data[weekIndex][dayIndex]['body_parts'].splice(bodypartIndex, 1);
    }

    this.refresh(weekIndex, dayIndex, bodypartIndex);

    // const exerciseIndex = event.target.parentElement.parentElement.dataset.exerciseIndex;
    // this.exercise_list[exerciseIndex]['data'].pop();
    // if (this.exercise_list[exerciseIndex]['data'].length === 0) {
    //   this.exercise_list.splice(exerciseIndex, 1);
    // }
    // this.cnt_workout = this.exercise_list.length;
  }

  zoomIn(): void {
      if (this.rate < this.max_rate) {
          this.rate += 0.1;
      }
  }

  zoomOut(): void {
      if (this.rate > this.min_rate) {
          this.rate -= 0.1;
      }
  }

  moveLeft(): void {
    console.log('>>> delta X: ', this.deltaX)
    console.log('>>> calendar_list: ', this.calendar_list)
    console.log('>>> data: ', this.data)
    let maxWorkouts = 0;
    this.data.map((week) => {
      let workouts = 0;
      week.map(plan => plan == null ? workouts += 0 : workouts++);
      maxWorkouts = Math.max(maxWorkouts, workouts);
    })
    console.log('>>> maxWorkouts: ', maxWorkouts)
    console.log('>>> before move left: ', this.left)
    if (this.left > -this.deltaX * (maxWorkouts - 1)){
        this.left -= this.deltaX;
        this.move();
    }
    console.log('>>> after move left: ', this.left)
  }

  moveRight(): void {
    console.log('>>> delta X: ', this.deltaX)
    console.log('>>> before move right: ', this.left)
    if (this.left < -this.deltaX) {
        this.left += this.deltaX;
        this.move();
    } else if (this.left == -this.deltaX) {
        this.left = -70;
        this.move();
    }
    console.log('>>> after move right: ', this.left)
  }

  move(): void {
      this.wrapper.nativeElement.style = `left: ${this.left}px`;
  }

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

  changeOption(event, option) {
    // this.loading = true;

    var dataset = event.target.parentElement.parentElement.dataset;
    if(dataset.index == undefined) {
      dataset = event.target.parentElement.parentElement.parentElement.dataset;
    }
    const index = parseInt(dataset.index, 0);
    const exerciseIndex = parseInt(dataset.exerciseIndex, 0);
    const bodypartIndex = parseInt(dataset.bodypartIndex, 0);
    const dayIndex = parseInt(dataset.dayIndex, 0);
    const weekIndex = parseInt(dataset.weekIndex, 0);
    const exercise = this.data[weekIndex][dayIndex]['body_parts'][bodypartIndex]['exercises'][exerciseIndex];
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
        if (value < 1)
          newValue = '1';
        else if (value > 5)
          newValue = '5';
      }

    } else if (option === 'method') {
      console.log('>>> value: ', value);
      console.log('>>> index: ', index);
      let aaa = JSON.parse(JSON.stringify(exercise['data']));
      console.log('>>> aaa: ', aaa);
      console.log('>>> exercise: ', exercise);

      if (value == METHODS.TEST) {
        currentSet['rtf'] = '0';
        currentSet['reps'] = '5';

        // set the last set as current test set and set method warm up and reps:5, RTF:4 of other sets
        for (let i = 0; i < exercise['data'].length; i++) {

          // get index for exercise
          let exerciseIndex = -1;
          for (let j = 0; j < this.workouts.length; j++) {
            if (this.workouts[j].detail_id == exercise.data[i].detail_id) {
              exerciseIndex = j;
              break;
            }
          }
          this.workouts.splice(exerciseIndex, 1)

          if (i == index) {
            continue;
          }

          exercise['data'][i]['method'] = METHODS.WARM_UP;
          exercise['data'][i]['reps'] = '5';
          exercise['data'][i]['rtf'] = '4';
          exercise['data'][i]['rm'] = RM_DATA[exercise['data'][i]['rtf']][exercise['data'][i]['reps'] - 1].toFixed(2);
          if (i > index) {
            exercise['data'][i - 1] = exercise['data'][i];
          }

          this.workouts.push(exercise.data[i]);
        }
        exercise['data'][exercise['data'].length - 1] = currentSet;
        this.workouts.push(currentSet);

        console.log('>>> exercises: ', exercise);

      } else if (value == METHODS.DROP) {
        currentSet['rest'] = '0:00';
      }

    } else if (option === 'rest') {
      if (newValue !== '' && newValue !== null) {
        const values = newValue.split(':');
        if (values.length > 1) {
          newValue = (parseInt(values[0], 0) % 100) + ':' + (parseInt(values[1], 0) % 100);
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

    console.log('>>> exercise information: ', exercise);

    if (currentSet['rtf'] !== '' && currentSet['reps'] !== '' && exercise.rm_show) {
      currentSet['rm'] = RM_DATA[currentSet['rtf']][currentSet['reps'] - 1].toFixed(2);
    } else {
      currentSet['rm'] = '';
    }

      // if the designer sets the test method on the first week, sets the same content to the last week
    if (weekIndex == 0 && option == 'method' && value == METHODS.TEST) {
      let firstWeekExercise = this.data[0][dayIndex].body_parts[bodypartIndex].exercises[exerciseIndex];
      let lastWeekBodyPart = null;
      let lastWeekExercise = null;

      console.log("---- day index: ", dayIndex)

      for (let bodyPart of this.data[this.weeks.length - 1][dayIndex].body_parts) {
        if (bodyPart.name == this.data[0][dayIndex].body_parts[bodypartIndex].name) {

          console.log("---- body part: ", bodyPart);
          lastWeekBodyPart = bodyPart;
          break;
        }
      }

      if (lastWeekBodyPart != null) {
        for (let exercise of lastWeekBodyPart.exercises) {
          if (exercise.name == firstWeekExercise.name) {
            lastWeekExercise = exercise;
            break;
          }
        }
      }
      console.log('---- first week exercise: ', firstWeekExercise)
      console.log('---- last week exercise: ', lastWeekExercise)

      if (lastWeekExercise == null) {
        // find the same exercise in the last week
        for (let day of this.data[this.weeks.length - 1]) {
          for (let bodyPart of day.body_parts) {
            for (let exercise of bodyPart.exercises) {
              if (firstWeekExercise.name == exercise.name) {
                lastWeekExercise = exercise;
                lastWeekBodyPart = bodyPart;
                break;
              }
            }
            if (lastWeekExercise != null) break;
          }
          if (lastWeekExercise != null) break;
        }
      }

      if (lastWeekExercise != null) {
        console.log('---- last week exercise: ', lastWeekExercise)
        let oldRowCount = lastWeekExercise.data.length;
        let detailIdList = [];
        lastWeekExercise.data.map(item => detailIdList.push(item.detail_id));

        let plan = lastWeekExercise.data[0].plan;
        let plan_id = lastWeekExercise.data[0].plan_id;
        let workout = lastWeekExercise.data[0].workout;

        // get index for exercise
        let lastWeekExerciseFirstIndex = -1;
        for (let i = 0; i < this.workouts.length; i++) {
          if (this.workouts[i].detail_id == lastWeekExercise.data[0].detail_id) {
            lastWeekExerciseFirstIndex = i;
            break;
          }
        }

        var temp = [];
        this.workouts.forEach(item => {
          if (detailIdList.indexOf(item.detail_id) == -1) {
            temp.push(item);
          }
        })
        this.workouts = temp;

        lastWeekExercise.data.splice(0, lastWeekExercise.data.length);
        for (let set of firstWeekExercise.data) {
          let newSet = JSON.parse(JSON.stringify(set));
          newSet.id = -1;
          newSet.detail_id = this.getDetailedIdForNewItem();
          newSet.plan = plan;
          newSet.plan_id = plan_id;
          newSet.workout = workout;
          lastWeekExercise.data.push(newSet);

          this.workouts.splice(lastWeekExerciseFirstIndex++, 0, newSet);
        }
        lastWeekExercise.row = lastWeekExercise.data.length;

        let diffRowCount = lastWeekExercise.row - oldRowCount;
        lastWeekBodyPart.row += diffRowCount;
      }
    }

    this.refresh(weekIndex, dayIndex, bodypartIndex);
  }

  refresh(weekIndex, dayIndex, bodypartIndex) {
    this.refreshRMData(weekIndex, dayIndex, bodypartIndex);
    this.calculateTotal();
    this.dataService.calculateStatistics();
    this.dataService.calculateOverloadGraphData();
  }

  refreshRMData(weekIndex, dayIndex, bodypartIndex) {
    const self = this;
    const exercise_list = this.data[weekIndex][dayIndex]['body_parts'][bodypartIndex]['exercises']
    exercise_list.forEach(function (exercise, exerciseIndex) {
      exercise['data'].forEach(function (data, index) {
        self.setRMData(index, exerciseIndex, weekIndex, dayIndex, bodypartIndex);
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

  setRMData(index, exerciseIndex, weekIndex, dayIndex, bodypartIndex) {
    const exercise_list = this.data[weekIndex][dayIndex]['body_parts'][bodypartIndex]['exercises'];
    const currentExercise = exercise_list[exerciseIndex];
    const currentSet = currentExercise['data'][index];

    if (currentSet['rtf'] === '' ||
      currentSet['rtf'] === null ||
      currentSet['reps'] === '' ||
      currentSet['reps'] === null) {
      return;
    }

    // no need if rm show is false
    if (!currentExercise.rm_show) {
      currentSet['rm'] = 0;
      return;
    }

    if (exerciseIndex > 0 && index === 0) {
      const previousExercise = exercise_list[exerciseIndex - 1];
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
}
