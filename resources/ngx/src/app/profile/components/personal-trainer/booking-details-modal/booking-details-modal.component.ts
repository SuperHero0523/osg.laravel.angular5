import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../../data.service';
import * as moment from 'moment';

@Component({
  selector: 'osg-personal-trainer-booking-details-modal',
  templateUrl: './booking-details-modal.component.html',
})

export class PersonalTrainerBookingDetailsModalComponent {

  onClose: EventEmitter<any> = new EventEmitter();
  onComplete: EventEmitter<any> = new EventEmitter();

  date: string;
  viewerRole: string;
  userId: number;
  userName: string;
  trainerId: number;

  availableHours: number = 0;

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  getTitleString() {
    return "Available for " + moment(this.date).format('ddd, Do MMMM YYYY ');
  }

  bookings: any[] = [];

  constructor(
    private readonly bsModalRef: BsModalRef,
    private http: HttpClient,
    private dataService: DataService,
  ) { }

  async ngOnInit() {
    const url = '/trainer/getBookingData?trainer_id=' + this.trainerId + "&date=" + this.date;
    this.http.get(url).subscribe((resp: any) => {
      console.log('>>> get booking api: ', resp);
      this.bookings = [];
      for (let tm = 10; tm < 21; tm++) {
        const booking = {
          time: tm,
          user_id: 0,
          user_name: ''
        }
        resp.result.map(el => {
          if (el.time == tm) {
            booking.user_id = el.user_id;
            booking.user_name = el.user_name;
          }
        })

        if (booking.user_id == 0)
          this.availableHours++;

        this.bookings.push(booking);
      }
    })
  }

  updateBooking = (index) => {
    const booking = this.bookings[index];
    const body = {
      trainer_id: this.trainerId,
      user_id: this.userId,
      date: this.date,
      time: booking.time,
      booked: this.userId == booking.user_id ? 0 : 1
    }

    this.http.post('/trainer/updateBooking', body).subscribe((resp: any) => {
      console.log('>>> update booking result: ', resp);
      if (body.booked) {
        this.bookings[index].user_id = this.userId;
        this.bookings[index].user_name = this.userName;
      } else {
        this.bookings[index].user_id = 0;
        this.bookings[index].user_name = "";
      }
    })
  }



  close(): void {
    this.onClose.emit(null);
    this.bsModalRef.hide();
  }

}
