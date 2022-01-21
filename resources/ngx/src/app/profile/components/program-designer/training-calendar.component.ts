import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProgramDesignerTrainingDayModalComponent } from './training-day-modal/training-day-modal.component';

import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import {ActivatedRoute} from '@angular/router';
import { MESSAGE_RELOAD_CALENDAR } from '../../../message.info';
import { MessageService } from '../../../core/services/data.service';
@Component({
  selector: 'osg-program-designer-training-calendar',
  templateUrl: './training-calendar.component.html'
})
export class ProgramDesignerTrainingCalendarComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;

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

  get cur_week() {
    return this.dataService.cur_week;
  }
  set cur_week(val) {
    this.dataService.cur_week = val;
  }

  get week_start_date() {
    return this.dataService.week_start_date;
  }

  set week_start_date(val) {
    this.dataService.week_start_date = val;
  }

  get cur_day() {
    return this.dataService.cur_day;
  }
  set cur_day(val) {
    this.dataService.cur_day = val;
  }

  get first_program() {
    return this.dataService.first_program;
  }

  swal: SweetAlert = _swal as any;

  strBelowLimitDate = ""

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    private http: HttpClient,
    private dataService: DataService,
    private router: Router,
    private messageService: MessageService,
    public activatedRoute: ActivatedRoute) { }

  /**
   * initialize
   */
  ngOnInit(): void {
    console.log('application user role: ', this.applicationUser.role);

    let strCurDate = moment().format('YYYY-MM-DD');
    let weekStartDate = moment(strCurDate).startOf('week').add(1, 'days');
    if (strCurDate > weekStartDate.format('YYYY-MM-DD')) {
      weekStartDate = moment(strCurDate).add(1, 'weeks').startOf('week').add(1, 'days');
    }

    this.week_start_date = weekStartDate.format('YYYY-MM-DD');
    this.strBelowLimitDate = weekStartDate.format('YYYY-MM-DD');

    let count = 0;
    let interval = setInterval(() => {
      if (this.weeks.length > 0) {
        clearInterval(interval);
        this.addDatesToWeeks();
        return;
      }

      count++;
      if (count >= 10)
        clearInterval(interval);

    }, 500)
  }

  /**
   * add dates for each week
   */
  addDatesToWeeks() {
    let strDate = moment(this.week_start_date).format('MMM DD');
    for (let week of this.weeks) {
      for (let plan of week) {
        plan.date = strDate;
        strDate = moment(strDate).add(1, 'days').format('MMM DD');
      }
    }
  }

  /**
   * get and return the date string as "November 01 2021" format
   * @returns
   */
  getDisplayDate(): String {
    return moment(this.week_start_date).format("MMMM DD YYYY").toUpperCase();
  }

  /**
   * this is called when the user clicks next week button
   */
  nextWeek() {
    this.week_start_date = moment(this.week_start_date).add(1, 'weeks').format('YYYY-MM-DD');
    this.addDatesToWeeks();
    console.log('>>> data: ', this.data);
  }

  /**
   * this is called when the user clicks prev week button
   */
  prevWeek() {
    let strPrevWeekStartDate = moment(this.week_start_date).subtract(1, 'weeks').format('YYYY-MM-DD');
    if (strPrevWeekStartDate >= this.strBelowLimitDate) {
      this.week_start_date = strPrevWeekStartDate;
      this.addDatesToWeeks();
    }
  }

  /**
   * go to calendar workout
   */
  gotoCalenderWorkout(): void {
    console.log(">>> goto calender workout")
    this.router.navigateByUrl('/#/profile')
  }

  /**
   * show day modal
   * @param week
   * @param day
   */
  showModal(week, day): void {
    this.cur_week = week;
    this.cur_day = day;
    this.bsModalRef = this.modalService.show(
      ProgramDesignerTrainingDayModalComponent,
      {
          class: 'calendar-modal',
      }
    );
  }

  /**
   * download calendar to the athelte's calendar
   */
  addToAthleteCalendar(): void {
    let designer_id = 0;
    if (this.activatedRoute.snapshot.params.handle != undefined)
      designer_id = this.activatedRoute.snapshot.params.handle;

    let week_end_date = moment(this.week_start_date).add(this.weeks.length, 'weeks').format('YYYY-MM-DD');

    this.http.get('/profile/calendarWorkoutLogs')
      .subscribe((resp: any) => {
        console.log('>>> calendarWorkoutLogs: ', resp);

        let bOverlapped = false;
        for (let log of resp.logs) {
          let start_date = log.start_date;
          let end_date = moment(start_date).add(log.weeks, 'weeks').format('YYYY-MM-DD');
          if ((start_date <= this.week_start_date && this.week_start_date < end_date) ||
            (start_date <= week_end_date && week_end_date < end_date)) {
            bOverlapped = true;
            break;
          }
        }

        if (bOverlapped) {
          this.swal({
            title: 'You can\'t add!',
            text: 'The during time is overlapped with another program.',
            icon: 'error',
            buttons: {
              confirm: {text: 'OK', className: 'btn-yellow-gradient'}
            }
          });
          return;
        }

        let body = {
          designer_id: designer_id,
          program_id: this.first_program.id,
          start_date: this.week_start_date,
          weeks: this.weeks.length
        }
        this.http.post('/profile/addToAthleteCalendar', body).subscribe((resp: any) => {
          // this.http.post('/profile/saveCalendarWorkoutLog', body).subscribe((resp: any) => {
          console.log('>>> save calendar workout log result: ', resp.success);
          this.messageService.sendMessage(MESSAGE_RELOAD_CALENDAR, "");
          this.router.navigateByUrl('/#/profile')
        })

      });
  }
}
