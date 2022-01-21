import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApplicationService } from './core/services/application.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { MessageService } from './core/services/data.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { StoreService } from './store/store.service';
import { MESSAGE_ATHLETE_LOGGED, MESSAGE_RELOAD_CALENDAR } from './message.info';
import { DataService } from './data.service';

@Component({
  selector: 'optimal-strength-gains',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loaded: boolean = false;
  isHeaderFooter: any = true;
  subscription: Subscription;

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }
  set calendar_workout_logs(val) {
    this.store.setCalendarWorkoutLogs(val);
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

  set cur_calendar_id(id) {
    this.store.setCurCalendarId(id);
  }

  set testable_exercises(val) {
    this.dataService.testable_exercises = val;
  }

  constructor(private readonly applicationService: ApplicationService,
    private store: StoreService,
    private messageService: MessageService,
    private http: HttpClient,
    private dataService: DataService,
    public router: Router) {

    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log('>>> app construction message receive service: ', message);
      console.log('>>> calendar workout logs: ', this.calendar_workout_logs);
      if (message.info === MESSAGE_ATHLETE_LOGGED && this.calendar_workout_logs == null) {
        this.getCalendarWorkoutLogs(message.text);
      }

      if (message.info == MESSAGE_RELOAD_CALENDAR) {
        this.getCalendarWorkoutLogs(message.text);
      }
    });

    this.http.get('/strengthstandard/getStrengthStandardExercises').subscribe((resp: any) => {
      if (resp.success == false) {
        console.log('>>> strength standard exercises api failed');
        return;
      }

      console.log('>>> strength standard exercises: ', resp.result);
      this.testable_exercises = resp.result;
    })
  }

  async ngOnInit() {
    console.log('>>> header footer: ', this.isHeaderFooter);
    await this.applicationService.getAuthenticatedUser().toPromise();

    this.loaded = true;
    if (window.location.href.indexOf('workout-detail') !== -1) {
      this.isHeaderFooter = false;
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isHeaderFooter = true;
        if (event.url.indexOf('workout-detail') !== -1) {
          this.isHeaderFooter = false;
        }
      }
    });
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

  getCalendarWorkoutLogs(user_id = '') {
    let url = '/profile/calendarWorkoutLogsWithBodypartName';
    if (user_id != '')
      url += '?user_id=' + user_id;

    this.http.get(url)
      .subscribe((resp: any) => {
        let curDate = moment().format('YYYY-MM-DD');
        for (let log of resp.logs) {

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
          console.log('real end date: ', realEndDate);

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

        if (this.required_preinterview == null) {
          this.required_preinterview = false;
        }

        if (this.required_postinterview == null) {
          this.required_postinterview = false;
        }

        this.calendar_workout_logs = resp.logs;
      })
  }
}
