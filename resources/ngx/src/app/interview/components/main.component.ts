import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import { ToastrService } from 'ngx-toastr';
import $ from 'jquery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { MessageService } from '../../core/services/data.service';
import { MESSAGE_RELOAD_CALENDAR } from '../../message.info';

export class BasicInfo {
  waist: string;
  hip: string;
  weight: string;
  ratio: string;
  injury: string;
}
export class Date {
  mon: Boolean;
  tue: Boolean;
  wed: Boolean;
  thu: Boolean;
  fri: Boolean;
  sat: Boolean;
  sun: Boolean;
}

@Component({
  selector: 'osg-interview',
  templateUrl: './main.component.html'
})
export class InterviewComponent implements OnInit {
  trainingdays: Array<String> = [];
  basic_info: BasicInfo = { waist: '', hip: '', weight: '', ratio: '', injury: ''};
  estimated_rms: Array<{key: any, text: String, load: any, reps: number, result: any}> = [
    {key: '1', text: 'flat bench press', load: '--- Type ---', reps: 0, result: 0},
    {key: '2', text: 'incline barbell press', load: '--- Type ---', reps: 0, result: 0},
    {key: '3', text: 'flat bench flyes', load: '--- Type ---', reps: 0, result: 0},
    {key: '4', text: 'dumbell shoulder press', load: '--- Type ---', reps: 0, result: 0},
    {key: '5', text: 'dumbell lateral raise', load: '--- Type ---', reps: 0, result: 0},
    {key: '6', text: 'bent dumbell lateral', load: '--- Type ---', reps: 0, result: 0},
    {key: '7', text: 'scrull crusher', load: '--- Type ---', reps: 0, result: 0},
    {key: '8', text: 'push down', load: '--- Type ---', reps: 0, result: 0},
    {key: '9', text: 'bent over barbell', load: '--- Type ---', reps: 0, result: 0},
    {key: '10', text: 'wide grip', load: '--- Type ---', reps: 0, result: 0},
    {key: '11', text: 'close grip', load: '--- Type ---', reps: 0, result: 0},
    {key: '12', text: 'scott curl', load: '--- Type ---', reps: 0, result: 0},
    {key: '13', text: 'seated hammer curl', load: '--- Type ---', reps: 0, result: 0},
    {key: '14', text: 'squat', load: '--- Type ---', reps: 0, result: 0},
    {key: '15', text: 'lunges', load: '--- Type ---', reps: 0, result: 0},
    {key: '16', text: 'leg extension', load: '--- Type ---', reps: 0, result: 0},
    {key: '17', text: 'seated leg curls', load: '--- Type ---', reps: 0, result: 0},
    {key: '18', text: 'standing carf', load: '--- Type ---', reps: 0, result: 0},
    {key: '19', text: 'cabel abdominal', load: '--- Type ---', reps: 0, result: 0}
  ];
  activity_selects: Array<{key: String, intensity: String, duration_hour: number, duration_min: number, days: any}> = [
    {key: 'endurance', intensity: '', duration_hour: 0, duration_min: 0,
    days: {mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false}},
    {key: 'strength', intensity: '', duration_hour: 0, duration_min: 0,
    days: {mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false}},
    {key: 'balance', intensity: '', duration_hour: 0, duration_min: 0,
    days: {mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false}},
    {key: 'flexibility', intensity: '', duration_hour: 0, duration_min: 0,
    days: {mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false}}
  ];
  step_count = 1;

  day_keys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  intensities = [
    { value: 'low', text: 'Low' },
    { value: 'moderate', text: 'Moderate' },
    { value: 'vigorous', text: 'Vigorous' }
  ]

  injuries = [
    { value: '', text: '' },
    { value: 'chest', text: 'Chest' },
    { value: 'upper_back', text: 'Upper back' },
    { value: 'lower_back', text: 'Lower back' },
    { value: 'shoulders', text: 'Shoulders' },
    { value: 'triceps', text: 'Triceps' },
    { value: 'biceps', text: 'Biceps' },
    { value: 'forearms', text: 'Forearms' },
    { value: 'abs', text: 'Abs' },
    { value: 'quads', text: 'Quads' },
    { value: 'hamstrings', text: 'Hamstrings' },
    { value: 'glutes', text: 'Glutes' },
    { value: 'calves', text: 'Calves' },
  ];

  customOptions: OwlOptions = {
    stagePadding: 0,
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoWidth: true,
    items: 1
  };
  width: number;
  train_type: number;
  isFocus: string;

  swal: SweetAlert = _swal as any;

  constructor(private http: HttpClient, private toastr: ToastrService, private store: StoreService, private router: Router, private message: MessageService) { }

  get cur_calendar_id() {
    return this.store.getCurCalendarId();
  }

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }
  set required_preinterview(val) {
    this.store.setRequiredPreinterview(val);
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }
  set required_postinterview(val) {
    this.store.setRequiredPostinterview(val);
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.train_type = 0;

    let calendar_id = 1;
    if (this.cur_calendar_id != undefined)
      calendar_id = this.cur_calendar_id;

    let url = '/interview/getExercises?calendar_id=' + calendar_id;
    this.http.get(url)
      .subscribe((resp: any) => {
        this.estimated_rms = [];
        for (let exercise of resp.exercises) {
          this.estimated_rms.push({
            key: exercise.exercise_id,
            text: exercise.exercise_name,
            load: '',
            reps: 0,
            result: 0,
          })
        }
      });
  }

  isBasicInfoValid() {
    if (this.basic_info.waist == '') {
      // this.toastr.warning("Please input the waist circumference value", '', { positionClass: 'toast-top-right' })
      this.swal({
        title: 'Missed Field',
        text: 'Please input the waist circumference value',
        icon: 'warning',
        buttons: {
          confirm: { text: 'OK', className: 'btn-yellow-gradient' }
        }
      }).then((value) => {
        $('#waist').focus();
      });
      return false;
    }

    if (this.basic_info.hip == '') {
      // this.toastr.warning("Please input the hip circumference value", '', { positionClass: 'toast-top-right' })
      this.swal({
        title: 'Missed Field',
        text: 'Please input the hip circumference value',
        icon: 'warning',
        buttons: {
          confirm: { text: 'OK', className: 'btn-yellow-gradient' }
        }
      }).then((value) => {
        $('#hip').focus();
      });
      return false;
    }

    if (this.basic_info.weight == '') {
      // this.toastr.warning("Please input the weight value", '', { positionClass: 'toast-top-right' })
      this.swal({
        title: 'Missed Field',
        text: 'Please input the weight value',
        icon: 'warning',
        buttons: {
          confirm: { text: 'OK', className: 'btn-yellow-gradient' }
        }
      }).then((value) => {
        $('#weight').focus();
      });
      return false;

    }

    return true;
  }

  NextToStep2() {
    console.log(">>> basic info: ", JSON.stringify(this.basic_info));
    if (this.isBasicInfoValid())
      this.step_count = 2;
  }

  isActivityValid() {
    for (let activity of this.activity_selects) {
      let bChecked: any = false;
      for (let key in activity.days) {
        bChecked |= activity.days[key];
      }

      let duration: number = activity.duration_hour * 60 + activity.duration_min;

      let bAllEmpty = !(bChecked | +(activity.intensity != '') | +(duration != 0));
      let bValid = bChecked & +(activity.intensity != '') & +(duration != 0);

      if (!bAllEmpty && !bValid) {
        let categoryName = "ENDURANCE"
        switch (activity.key) {
          case "endurance":
            break;
          case "strength":
            categoryName = "STRENGTH";
            break;
          case "balance":
            categoryName = "BALANCE";
            break;
          case "flexibility":
            categoryName = "FLEXIBILITY";
            break;
        }
        this.swal({
          title: 'Missed Complete',
          text: `Please complete ${categoryName} fields`,
          icon: 'warning',
          buttons: {
            confirm: { text: 'OK', className: 'btn-yellow-gradient' }
          }
        });
        console.log('>>> isActivityValid: false ');
        return false;
      }
    }

    console.log('>>> isActivityValid: true ');

    return true;
  }

  NextToStep3() {
    console.log(`>>> activities: `, JSON.stringify(this.activity_selects));
    if (this.isActivityValid())
      this.step_count = 3;
  }

  PrevToStep1() {
    this.step_count = 1;
  }

  PrevToStep2() {
    this.step_count = 2;
  }

  onKeyPressForBasicInput(event) {
    let keynum;
    if(window.event) { // IE
      keynum = event.keyCode;
    } else if (event.which){ // Netscape/Firefox/Opera
      keynum = event.which;
    }

    let value = String.fromCharCode(keynum);
    if ((value < '0' || '9' < value) && value != '.') {
      event.preventDefault();
    }
  }

  CheckTrainingDay(key, type) {
    this.activity_selects.forEach(sel => {
      if (key === sel.key) {
        sel.days[type] = !sel.days[type];
      }
    });
  }

  onChangeBasicInfo(val, key) {
    this.basic_info[key] = val;
    if (this.basic_info.hip != '') {
      let ratio = parseFloat(String(parseFloat(this.basic_info.waist) / parseFloat(this.basic_info.hip))).toFixed(2);

      this.basic_info.ratio = ratio.replace('.', ',');
    }
  }

  onChangeReps(val, key) {
    this.estimated_rms.forEach(sel => {
      if (key === sel.key) {
        sel.result = Math.round(sel.load * (1 + val / 30));
      }
    });
  }

  onChangeLoad(val, key) {
    this.estimated_rms.forEach(sel => {
      if (key === sel.key) {
        sel.result = Math.round(val * (1 + sel.reps / 30));
      }
    });
  }

  onIntensityChange(val, key) {
    this.activity_selects.forEach(sel => {
      if (key === sel.key) {
        sel.intensity = val;
      }
    });
  }

  onDurationHourChange(val, key) {
    this.activity_selects.forEach(sel => {
      if (key === sel.key) {
        sel.duration_hour = val;
      }
    });
  }

  onDurationMinChange(val, key) {
    this.activity_selects.forEach(sel => {
      if (key === sel.key) {
        sel.duration_min = val;
      }
    });
  }

  owlCarNext(owlCar) {
    console.log(`>>> step count: ${this.step_count}, basic valid: `, this.isBasicInfoValid())
    if (this.step_count == 1 && this.isBasicInfoValid()) {
      this.step_count++;
      owlCar.next();
    } else if (this.step_count == 2 && this.isActivityValid()) {
      this.step_count++;
      owlCar.next();
    }
  }

  owlCarPrev(owlCar) {
    this.step_count--;
    owlCar.prev();
  }

  onSelectTrainingType(type) {
    this.train_type = type;
  }

  onFocus(type) {
    this.isFocus = type;
  }

  onBlur() {
    this.isFocus = '';
  }

  onSavePostInterview() {
    this.http.post('interview/saveData', {
      calendar_id: this.cur_calendar_id,
      waist: this.basic_info.waist,
      hip: this.basic_info.hip,
      weight: this.basic_info.weight,
      injury: this.basic_info.injury
    }).subscribe((resp: any) => {
      if (resp.success == false) {
        console.log(`>>> interview save data api request failed`)
        return;
      }

      // next, save interview id into the calendar table
      let insertedId = resp.insertedId;

      let updateInterview = {
        calendar_id: this.cur_calendar_id,
        preinterview_id: 0,
        postinterview_id: insertedId
      }

      this.http.post('interview/updateInterviewId', updateInterview).subscribe((resp: any) => {
        if (resp.success == false) {
          console.log(`>>> update interview id failed`);
          return;
        }

        this.required_postinterview = false;

        this.message.sendMessage(MESSAGE_RELOAD_CALENDAR, "");
        this.router.navigate(['/profile']);
      })
    });
  }

  upload() {
    let exerciseRms = [];
    for (let rm of this.estimated_rms) {
      if (rm.load == 0 || rm.reps == 0) {
        this.swal({
          title: 'Missed Field',
          text: 'Please input all load and reps fields',
          icon: 'warning',
          buttons: {
            confirm: { text: 'OK', className: 'btn-yellow-gradient' }
          }
        });
        return;
      }
      exerciseRms.push({
        id: rm.key,
        rm: rm.result
      })
    }

    // first, save interview data
    this.http.post('interview/saveData', {
      calendar_id: this.cur_calendar_id,
      waist: this.basic_info.waist,
      hip: this.basic_info.hip,
      weight: this.basic_info.weight,
      injury: this.basic_info.injury
    }).subscribe((resp: any) => {
      if (resp.success == false) {
        console.log(`>>> interview save data api request failed`)
        return;
      }

      // next, save interview id into the calendar table
      let insertedId = resp.insertedId;

      let updateInterview = {
        calendar_id: this.cur_calendar_id,
        preinterview_id: insertedId,
        postinterview_id: 0
      }

      this.http.post('interview/updateInterviewId', updateInterview).subscribe((resp: any) => {
        if (resp.success == false) {
          console.log(`>>> update interview id failed`);
        }
      })

      // next, save activity data
      for (let activity of this.activity_selects) {
        if (activity.intensity == '') continue;

        console.log(`>>> activity: `, activity);

        let activityReq = {
          interview_id: insertedId,
          category: activity.key,
          training_days: JSON.stringify(activity.days),
          intensity: activity.intensity,
          duration_hour: activity.duration_hour,
          duration_minute: activity.duration_min
        }

        this.http.post('interview/saveOtherActivity', activityReq).subscribe((resp: any) => {
          if (resp.success == false) {
            console.log(`>>> interview save other activity failed`);
          }
        });
      }

      // finally, upload exercise information
      let exerciseRmReq = {
        calendar_id: this.cur_calendar_id,
        exercise_rms: JSON.stringify(exerciseRms)
      }
      this.http.post('interview/uploadExerciseRms', exerciseRmReq).subscribe((resp: any) => {
        if (resp.success == true) {
          this.required_preinterview = false;

          this.message.sendMessage(MESSAGE_RELOAD_CALENDAR, "");
          this.router.navigate(['/profile']);

        } else {
          console.log(`>>> upload exercise rms failed`);
        }
      })

    });

  }
}
