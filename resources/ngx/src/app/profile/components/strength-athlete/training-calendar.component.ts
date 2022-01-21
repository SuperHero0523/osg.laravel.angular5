import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationUser } from 'src/app/core/classes/user';
import { SimpleModalService } from 'ngx-simple-modal';
import { StrengthAthleteModalComponent } from './modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { StoreService } from '../../../store/store.service';
import * as moment from 'moment';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import {Subscription} from 'rxjs';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {pluck, take} from 'rxjs/operators';
import { of } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StrengthAthleteTrainingDayModalComponent } from './training-day-modal/training-day-modal.component';
import { ApplicationService } from '../../../core/services/application.service';

export class Workout {
  date: string;
  isToday: boolean;
  status: string;
  detail: string;
  type: string;
  bodyParts: string;
  completed: boolean;
  testSession: boolean;
  program: string;
  plan: string;
  fullDateString: string;
  isCurMonth?: boolean;
}
@Component({
  selector: 'osg-strength-athlete-training-calendar',
  templateUrl: './training-calendar.component.html'
})
export class StrengthAthleteTrainingCalendarComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;

  weeks_data = [];
  today_info: any = {
    date: '',
    bodyParts: '',
    program: ''
  };
  base_date: string;
  cur_month_year: string;

  exercises_hash_map = {}

  swal: SweetAlert = _swal as any;

  bsModalRef: BsModalRef;

  selectedCalendarId = null;
  isMovableToPrevWeek = false;
  isMovableToNextWeek = false;

  constructor(private modalService: BsModalService,
    private simpleModalService: SimpleModalService,
    private applicationService: ApplicationService,
    private router: Router,
    private store: StoreService,
    private dataService: DataService,
    private http: HttpClient) {

  }

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }

  set calendar_workout_logs(value) {
    this.store.setCalendarWorkoutLogs(value);
  }

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  /**
   * initialize
   */
  async ngOnInit() {
    console.log(">>> training-calendar component init")
    this.base_date = moment().format('YYYY-MM-DD');

    await new Promise((resolve) => {
      let interval = setInterval(async () => {
        if (this.calendar_workout_logs == null) return;

        clearInterval(interval);

        this.getTodayInfo();
        this.refreshCalendar();

        if (!this.from_other_profile) {
          console.log(`>>> required post interview: `, this.required_postinterview)
          if (this.required_postinterview) {
            this.swal({
              title: '',
              text: 'Please fill out the post-interview form, in order to analyze your results.',
              icon: 'warning',
              buttons: {
                confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
              }
            }).then((value) => {
              return resolve(this.router.navigate(['/interview']));
            });
          }

          console.log(`>>> required pre interview: `, this.required_preinterview)
          if (this.required_preinterview) {
            this.swal({
              title: '',
              text: 'Please fill out the pre-interview form before starting, in order to customize the program to you.',
              icon: 'warning',
              buttons: {
                confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
              }
            }).then((value) => {
              return resolve(this.router.navigate(['/interview']));
            });
          }
        }

        resolve(0);
      }, 100);
    })
  }

  /**
   * this is called when the user clicks start button
   * */
  start() {
    let date = moment().format('dddd, MMMM DD');

    let status = "start"
    if (this.today_info.completed)
      status = "completed";

    this.router.navigate(['/workout-detail', this.today_info.plan, date, status]);
  }

  /**
   * this is called when the user click edit button
   */
  edit() {
    let date = moment().format('dddd, MMMM DD');

    let status = "edit"
    if (this.today_info.completed)
      status = "completed";

    this.router.navigate(['/workout-detail', this.today_info.plan, date, status]);
  }

  /**
   * this is called when the user clicks prev month button
   */
  prevMonth() {
    this.base_date = moment(this.base_date).subtract(1, 'months').format('YYYY-MM-DD');
    this.refreshCalendar();
  }

  /**
   * this is called when the user clicks next month button
   */
  nextMonth() {
    this.base_date = moment(this.base_date).add(1, 'months').format('YYYY-MM-DD');
    this.refreshCalendar();
  }

  /**
   * update the start dates of workout logs
   * @param list
   * @param direction
   * @returns
   */
  updateStartDates(list: any, direction: string) {
    let strStartDate = ""
    let workout_logs = JSON.parse(JSON.stringify(this.calendar_workout_logs));
    for (let log of workout_logs) {
      for (let item of list) {
        if (log.id == item.id) {
          log.start_date = item.start_date;
        }
        if (this.selectedCalendarId == item.id)
          strStartDate = item.start_date;
      }
    }
    this.calendar_workout_logs = workout_logs;

    // check if the start date is in range of selected month
    let firstDay = moment(this.base_date).startOf('month').format('YYYY-MM-DD');
    let lastDay = moment(this.base_date).endOf('month').format('YYYY-MM-DD');

    if (firstDay <= strStartDate && strStartDate <= lastDay) {
      this.refreshCalendar();
      return;
    }

    if (direction == 'prev')
      this.prevMonth();
    else
      this.nextMonth();
  }

  /**
   * this is called when the user clicks prev week button
   */
  toPrevWeek() {
    if (!this.isMovableToPrevWeek) return;

    const direction = 'prev';
    this.http.post('/profile/moveCalendar', { calendar_id: this.selectedCalendarId, direction: direction }).subscribe((resp: any) => {
      console.log('>>> calendar to prev week: ', resp)
      this.updateStartDates(resp.result, direction);
    })
  }

  /**
   * this is called when the user clicks next week button
   */
  toNextWeek() {
    if (!this.isMovableToNextWeek) return;

    const direction = 'next';
    this.http.post('/profile/moveCalendar', { calendar_id: this.selectedCalendarId, direction: direction }).subscribe((resp: any) => {
      console.log('>>> calendar to next week: ', resp)
      this.updateStartDates(resp.result, direction);
    })
  }

  /**
   * refresh calendar
   */
  async refreshCalendar() {
    this.cur_month_year = moment(this.base_date).format('MMMM YYYY');

    let firstDay = moment(this.base_date).startOf('month').startOf('week');

    // this is logic when Monday is start of a week.
    // if Sunday is start of a week, remove this following if statement
    if (firstDay.format('YYYY-MM-DD') == moment(this.base_date).startOf('month').format('YYYY-MM-DD'))
      firstDay = firstDay.subtract(6, 'days');
    else
      firstDay = firstDay.add(1, 'days');

    let firstDayOfNextMonth = moment(this.base_date).add(1, 'months').startOf('month');
    let dates = [];
    let loopDay = firstDay;
    while (loopDay < firstDayOfNextMonth || loopDay.format('dddd') !== 'Monday'/*loopDay.format('dddd') !== 'Sunday'*//* the logic when Sunday is start of a week */) {
      dates.push(loopDay.format('YYYY-MM-DD'));
      loopDay.add(1, 'days');
    }

    console.log(">>> calendar dates: ", JSON.stringify(dates))

    // console.log(`>>> calendar workout log: `, this.calendar_workout_logs);
    this.weeks_data = [];
    let week = [];
    let i = 0;

    for (let d of dates) {
      var detail = new Workout;
      detail.isCurMonth = moment(d).format('MMMM YYYY') == this.cur_month_year;
      detail.fullDateString = moment(d).format('ddd, DD MMMM YYYY');
      detail.date = moment(d).format('MMM DD');
      detail.isToday = d == moment().format('YYYY-MM-DD');
      // detail.type = "GVT";

      let detailed = await this.getDetailedInfo(moment(d).format('YYYY-MM-DD'), loopDay.format('YYYY-MM-DD'));
      if (detailed.body_parts != undefined) {
        detail.plan = detailed.plan;
        detail.bodyParts = detailed.body_parts;
        detail.completed = detailed.completed;
        detail.testSession = detailed.test_session;
        detail.program = detailed.program;

      } else {
        detail.plan = "";
        detail.bodyParts = "";
        detail.completed = false;
        detail.testSession = false;
        detail.program = "";
      }

      if (detail.bodyParts != '') {
        if (detail.completed) {
          detail.status = 'completed';
        } else if (d >= moment().format('YYYY-MM-DD')) {
          detail.status = 'upcoming';
        } else {
          detail.status = 'missed';
        }
      }

      if (i % 7 == 0 && i > 0) {
        this.weeks_data.push(JSON.parse(JSON.stringify(week)));
        console.log(`>>> week data: `, JSON.parse(JSON.stringify(week)));
        week = [];
      }

      week.push(detail);
      i++;
    }
    this.weeks_data.push(JSON.parse(JSON.stringify(week)));

    console.log(">>> final calendar dates: ", JSON.parse(JSON.stringify(this.weeks_data)))

    // check if the calendar is movable to prev or next week
    // firstly find the calendar in range of this month
    const calendarStartDate = moment(this.base_date).startOf('month').format('YYYY-MM-DD');
    const calendarEndDate = moment(this.base_date).endOf('month').format('YYYY-MM-DD');

    const workout_logs = [];
    const today = moment().format('YYYY-MM-DD');
    for (let log of this.calendar_workout_logs) {
      if (!(calendarStartDate <= log.start_date && log.start_date <= calendarEndDate)) continue;

      workout_logs.push(log);
    }

    // remove performed calendar
    for (let i = workout_logs.length - 1; i >= 0; i--) {
      const weeks_data = workout_logs[i].weeks_data;
      let isPerformed = false;
      for (let week_data of weeks_data) {
        for (let day_data of week_data) {
          if (day_data == null) continue;
          if (day_data.completed == undefined) continue;

          if (day_data.completed) {
            isPerformed = true;
            break;
          }
        }
        if (isPerformed) break;
      }

      if (isPerformed) {
        workout_logs.splice(i, 1);
      }
    }

    console.log('>>> workout logs: ', workout_logs);
    console.log('>>> today: ', today);

    let isMovableToNextWeek = true;
    let isMovableToPrevWeek = true;

    // no programs
    if (!workout_logs.length) {
      this.isMovableToNextWeek = false;
      this.isMovableToPrevWeek = false;
      return;
    }

    // select first calendar
    // get the index of first calendar
    let selLog = workout_logs[0];
    let earliestStartDate = selLog.start_date;
    for (let log of workout_logs) {
      if (log.start_date < earliestStartDate) {
        earliestStartDate = log.start_date;
        selLog = log;
      }
    }

    if (selLog.start_date <= today) {
      isMovableToPrevWeek = false;
    }

    if (isMovableToPrevWeek) {
      const newStartDate = moment(selLog.start_date).subtract(1, 'weeks').format('YYYY-MM-DD');
      if (newStartDate < today) {
        isMovableToPrevWeek = false;

      } else {
        const newEndDate = moment(newStartDate).add(selLog.weeks, 'weeks').format('YYYY-MM-DD');

        console.log('>>> new start data: ', newStartDate)
        console.log('>>> new end data: ', newEndDate)
        // check if other calendars are overlapped with prev week range
        for (let log of this.calendar_workout_logs) {
          if (log.id == selLog.id) continue;

          const endDate = moment(log.start_date).add(log.weeks, 'weeks').format('YYYY-MM-DD');
          if (newStartDate < endDate && endDate <= newEndDate) {
            console.log('>>> log end date: ', endDate);
            isMovableToPrevWeek = false;
            break;
          }
        }
      }
    }

    this.isMovableToPrevWeek = isMovableToPrevWeek;
    this.isMovableToNextWeek = isMovableToNextWeek;

    this.selectedCalendarId = selLog.id;
  }

  /**
   * get detailed information for a date
   * @param strDate
   * @param strEndDate
   * @returns
   */
  getDetailedInfo(strDate, strEndDate): any {
    // console.log(`>>> date: ${strDate}, end date: ${strEndDate} `);
    // console.log(`>>> calendar_workout_logs: `, this.calendar_workout_logs);
    for (let log of this.calendar_workout_logs) {
      if (strEndDate <= log.start_date) continue;

      let end_date = moment(log.start_date).add(log.weeks, 'weeks').format('YYYY-MM-DD')

      if (end_date <= strDate) continue;

      let i: number = 0;
      let loopDay = log.start_date;
      while (loopDay < end_date) {
        if (loopDay == strDate) {
          let index: number = Math.floor(i / 7);

          let bodypart = log.weeks_data[index][i % 7];
          if (bodypart == null || bodypart == '') {
            return {}
          }
          if (bodypart.plan != undefined)
            bodypart.program = log.program_name;

          return bodypart;
        }
        i++;
        loopDay = moment(loopDay).add(1, 'days').format('YYYY-MM-DD');
      }
    }

    return {};
  }

  /**
   * get today information
   */
  getTodayInfo() {
    this.today_info.date = moment().format('dddd, MMMM DD');
    let info = this.getDetailedInfo(moment().format('YYYY-MM-DD'), moment().add(1, 'weeks').format('YYYY-MM-DD'))
    console.log('>>> today information: ', info)

    if (info.body_parts == undefined || info.body_parts == '') {
      this.today_info.bodyParts = "";
      this.today_info.program = "";

    } else {

      console.log('>>> today information: ', info)
      let bodyParts = ""
      let bodyPartList = info.body_parts.split("/");
      if (bodyPartList.length < 2) {
        bodyParts = info.body_parts;

      } else {
        for (let i = 0; i < bodyPartList.length - 1; i++) {
          bodyParts += bodyParts == '' ? '' : ', ';
          bodyParts += bodyPartList[i].trim();
        }
        bodyParts += " & " + bodyPartList[bodyPartList.length - 1].trim();
      }

      this.today_info.bodyParts = bodyParts;
      this.today_info.program = info.program;
      this.today_info.plan = info.plan;
      this.today_info.completed = info.completed;
    }

    this.today_info.standDate = moment().format('YYYY-MM-DD');
  }

  /**
   * call showing workout modal for selected date
   * @param day_data
   */
  showWorkoutModal(day_data): void {
    console.log(`>>> workout modal: `);
    this.http.get('/profile/getWorkouts?plan_id=' + day_data.plan).subscribe((resp: any) => {
      console.log(`>>> data: `, resp);

      const initialState = {
        data: resp.result,
        synthe_data: resp.synthe_result,
        date_string: day_data.fullDateString,
      };
      this.bsModalRef = this.modalService.show(
        StrengthAthleteTrainingDayModalComponent,
        {
          initialState,
          class: 'athlete-calendar-modal',
        }
      );
    })
  }
}
