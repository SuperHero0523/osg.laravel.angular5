import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PersonalTrainerBookingDetailsModalComponent } from './booking-details-modal/booking-details-modal.component';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';


const DATE_STATUS_UNKNOWN = 'Unknown';
const DATE_STATUS_AVAILABLE = 'Available';
const DATE_STATUS_Busy = 'Busy';

@Component({
  selector: 'osg-personal-trainer-booking-calendar',
  templateUrl: './booking-calendar.component.html'
})
export class PersonalTrainerBookingCalendarComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;

  year: number = moment().year();
  month: number = moment().month();

  startDate: string;
  endDate: string;

  calendar: any[] = [];

  completelyBooked: number = 11;
  almostBooked: number = 9;

  swal: SweetAlert = _swal as any;

  dateStatusList = [
    DATE_STATUS_UNKNOWN,
    DATE_STATUS_AVAILABLE,
    DATE_STATUS_Busy
  ]

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, private http: HttpClient, private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStartAndEndDate();
    this.loadCalendarData();
  }

  getMonthName() {
    return moment([this.year, this.month]).format('MMMM');
  }

  getStartAndEndDate() {
    this.startDate = moment([this.year, this.month]).day('Sunday').format('YYYY-MM-DD');
    this.endDate = moment([this.year, this.month]).add(1, 'months').subtract(1, 'days').day('Saturday').format('YYYY-MM-DD');
  }

  movePrevMonth() {
    this.year = parseInt(moment([this.year, this.month]).subtract(1, 'months').format('YYYY'));
    this.month = parseInt(moment([this.year, this.month]).subtract(1, 'months').format('M')) - 1;
    this.getStartAndEndDate();
    this.loadCalendarData();
  }

  moveNextMonth() {
    this.year = parseInt(moment([this.year, this.month]).add(1, 'months').format('YYYY'));
    this.month = parseInt(moment([this.year, this.month]).add(1, 'months').format('M')) - 1;
    this.getStartAndEndDate();
    this.loadCalendarData();
  }

  getClassName(day) {
    let className = 'day ';
    if (day.status != DATE_STATUS_AVAILABLE)
      return className;

    if (day.booked == this.completelyBooked)
      className += 'completely-full';
    else if (day.booked >= this.almostBooked)
      className += 'almost-full';
    else
      className += 'available';

    return className;
  }

  loadCalendarData() {
    const url = '/trainer/getCalendar?start=' + this.startDate + "&end=" + this.endDate;
    this.http.get(url).subscribe((resp: any) => {
      console.log('>>> calendar data api result: ', resp);
      this.calendar = [];
      let week = [];

      let dt = this.startDate;
      while (dt <= this.endDate) {
        let day = {
          date: dt,
          showDate: moment(dt).format('D'),
          status: DATE_STATUS_UNKNOWN,
          booked: 0,
        }
        resp.result.map(el => {
          if (el.date == dt) {
            day.status = el.status as string;
            day.status = day.status.replace(/^./, day.status[0].toUpperCase());
            day.booked = el.booked;
          }
        })
        week.push(day);

        if (week.length == 7) {
          this.calendar.push(week);
          week = [];
        }

        dt = moment(dt).add(1, 'days').format('YYYY-MM-DD');
      }

      console.log('>>> calendar: ', this.calendar);

      // if month is current month
      if (this.from_other_profile == false && this.month == moment().month()) {
        let needAlert = true;
        if (resp.result.length > 0) {
          const lastDay = resp.result[resp.result.length - 1].date;
          const lastDayWeekFirstDay = moment(lastDay).day('Sunday').format('YYYY-MM-DD');
          const nextWeekFirstDay = moment().add(1, 'weeks').day('Sunday').format('YYYY-MM-DD');
          if (lastDayWeekFirstDay >= nextWeekFirstDay)
            needAlert = false;
        }

        if (needAlert) {
          this.swal({
            title: '',
            text: 'Please update your available dates.',
            icon: 'warning',
          });
        }
      }
    })
  }

  onChangeStatus = async (day) => {
    console.log('>>> change status: ', day);
    let old_ignore = 1;
    if (day.status == DATE_STATUS_AVAILABLE && day.booked > 0) {
      await new Promise((resolve) => {
        this.swal({
          title: 'Old bookings?',
          text: 'Do you want to recover old bookings?',
          icon: 'info',
          buttons: {
            confirm: {text: 'YES', className: 'btn-yellow-gradient', value: true},
            cancel: {text: 'NO', className: 'btn-black', value: false, visible: true}
          }
        }).then((result) => {
          console.log('>>> old booking y/n result: ', result)
          if (result) {
            old_ignore = 0;
          }

          resolve(0);
        });
      })
    }
    const body = {
      date: day.date,
      status: (day.status as string).toLowerCase(),
      old_ignore: old_ignore
    }
    this.http.post('/trainer/updateDateStatus', body).subscribe((resp: any) => {
      console.log('>>> update result: ', resp);
    })
  }

  showBookingModal = (day) => {
    if (day.status != DATE_STATUS_AVAILABLE) return;

    let trainer_id = this.applicationUser.profile.user_id;
    if (this.from_other_profile) {
      trainer_id = this.activatedRoute.snapshot.params.handle
    }
    const initialState = {
      date: day.date,
      viewerRole: this.applicationUser.role,
      trainerId: trainer_id,
      userId: this.applicationUser.profile.user_id,
      userName: this.applicationUser.profile.name,
    };
    this.bsModalRef = this.modalService.show(PersonalTrainerBookingDetailsModalComponent, { initialState, class: 'modal-lg' });

    // this.bsModalRef.content.onClose.subscribe(result => {
    //   console.log('>>>>>>> result: ', result)
    //   if (result != null) {
    //     this.review.content = result.content;
    //     this.review.score = result.score;
    //   }
    // })
  }


}
