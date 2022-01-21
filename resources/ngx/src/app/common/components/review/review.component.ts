import { Component, OnInit, Input, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';

@Component({
  selector: 'osg-review',
  templateUrl: './review.component.html'
})

export class ReviewComponent implements OnInit {
  @Input() review: any;

  rate_value = [
    'zero', 'worst', 'worse', 'middle', 'good', 'excellent'
  ];

  ngOnInit() {
    this.review.date = moment(this.review.updatedAt.split(" ")[0]).format('MMM DD, YYYY');
  }
}
