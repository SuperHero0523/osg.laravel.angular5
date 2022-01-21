import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ApplicationUser } from '../../core/classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _swal from 'sweetalert';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../data.service';
import * as moment from 'moment';

@Component({
  selector: 'osg-reviews-page',
  templateUrl: './main.component.html'
})

export class ReviewsComponent implements OnInit {
  @Input() applicationUser: ApplicationUser;

  rate_value = [
    'zero', 'worst', 'worse', 'middle', 'good', 'excellent'
  ];

  get reviews() {
    return this.dataService.reviews;
  }
  set reviews(val) {
    this.dataService.reviews = val;
  }

  get first_program() {
    return this.dataService.first_program;
  }
  set first_program(val) {
    this.dataService.first_program = val;
    this.dataService.first_program_subject.next('reviews');
  }

  constructor(private readonly dataService: DataService, private spinner: NgxSpinnerService, private http: HttpClient, lc: NgZone) {
  }


  ngOnInit() {
    var str = window.location.href.split('?')[1];
    var id = str.split('=')[1];
    console.log('program_id = ', id);
    this.loadReviews(parseInt(id));
  }

  loadReviews(program_id) {
    this.spinner.show();
    this.http.post('program/restapi?info=read-reviews', {program_id: program_id}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
    .subscribe(resp => {
      console.log('read reviews = ', resp);
      this.reviews = resp['data'];
      this.first_program = resp['program'];
      this.spinner.hide();
    });
  }

}
