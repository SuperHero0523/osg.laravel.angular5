import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SummaryData } from '../main.component';
import { StoreService } from '../../../store/store.service';
import * as moment from 'moment';
import { MessageService } from '../../../core/services/data.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { MESSAGE_SAVE_WORKOUTLOGS } from '../../../message.info';

@Component({
  selector: 'osg-workout-detail-complete',
  templateUrl: './workout-detail-complete.component.html'
})
export class WorkoutDetailCompleteComponent implements OnInit{

  @Input() summary: SummaryData;
  @Input() alreadyCompleted: boolean;
  swal: SweetAlert = _swal as any;

  constructor(private router: Router, private http: HttpClient, private store: StoreService, private messageService: MessageService) {}

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }
  set calendar_workout_logs(val) {
    this.store.setCalendarWorkoutLogs(val);
  }

  set required_preinterview(val) {
    this.store.setRequiredPreinterview(val);
  }

  set required_postinterview(val) {
    this.store.setRequiredPostinterview(val);
  }

  set cur_calendar_id(id) {
    this.store.setCurCalendarId(id);
  }

  ngOnInit(): void {
    console.log('>>> summary: ', this.summary);
  }

  onChangeSleepLevel(value) {
    this.summary.sleep_level = value;
    console.log('>> onChangeSleepLevel: ', this.summary.sleep_level);
  }

  onChangeEnergyLevel(value) {
    this.summary.energy_level = value;
    console.log('>> onChangeEnergyLevel: ', this.summary.energy_level);
  }

  onChangeStressLevel(value) {
    this.summary.stress_level = value;
    console.log('>> onChangeStressLevel: ', this.summary.stress_level);
  }

  onChangeInjury(val, index) {
    this.summary.injuries[index].active = val;
  }

  injureSelect() {
    this.summary.injuries.map((injury) => { injury.active = true });
  }

  injureDeselect() {
    this.summary.injuries.map((injury) => { injury.active = false });
  }

  isAllInjuryDeselect() {
    for (let injury of this.summary.injuries) {
      if (injury.active) return false;
    }

    return true;
  }

  isAllInjurySelect() {
    for (let injury of this.summary.injuries) {
      if (!injury.active) return false;
    }

    return true;
  }

  goBack() {
    this.router.navigate(['/workout-log']);
  }

  finishWorkout() {
    // this.messageService.sendMessage(MESSAGE_SAVE_WORKOUTLOGS, "");

    let body = {
      plan_id: this.summary.plan_id,
      load_data: JSON.stringify(this.summary.load_data),
      sleep_level: this.summary.sleep_level,
      energy_level: this.summary.energy_level,
      stress_level: this.summary.stress_level,
      injuries: JSON.stringify(this.summary.injuries),
      notes: this.summary.notes,
    }

    if (this.summary.id != undefined && this.summary.id != null)
      body['id'] = this.summary.id;

    this.http.post('/workoutlog/saveSummary', body).subscribe((resp: any) => {
      if (resp.success) {
        this.getCalendarWorkoutLogs();
      } else {
        console.log('>>> save summary failed:')
      }
    });
  }

  getCalendarWorkoutLogs() {
    this.http.get('/profile/calendarWorkoutLogsWithBodypartName')
      .subscribe((resp: any) => {
        let curDate = moment().format('YYYY-MM-DD');
        for (let log of resp.logs) {

          // this.cur_calendar_id = log.id;
          // this.required_postinterview = true;
          // break;

          if (!log.preinterview_id) {
            console.log(">>> required preinterview set")
            this.cur_calendar_id = log.id;
            this.required_preinterview = true;
            break;
          }

          let endDate = moment(log.start_date).add(log.weeks, 'weeks').format('YYYY-MM-DD');

          // get real end date
          let isFinished = false;
          let reduce = 0;
          for (let i = log.weeks_data.length - 1; i >= 0; i--) {
            let week = log.weeks_data[i];
            let breaked = false;
            for (let j = 6; j >= 0; j--) {
              if (week[j] == null || week[j] == undefined) {
                reduce++;
              } else {
                if (week[j].completed)
                  isFinished = true;

                breaked = true;
                break;
              }
            }

            if (breaked)
              break;
          }
          let realEndDate = moment(endDate).subtract(reduce, 'days').subtract(1, 'days').format('YYYY-MM-DD');

          if ((curDate > realEndDate || isFinished) && !log.postinterview_id) {
            console.log(">>> required postinterview set")
            this.cur_calendar_id = log.id;
            this.required_postinterview = true;
            break;
          }

          if (log.start_date <= curDate && curDate < endDate) {
            this.cur_calendar_id = log.id;
          }
        }

        this.calendar_workout_logs = resp.logs;

        this.router.navigate(['/workout-log']);
      })
  }

}
