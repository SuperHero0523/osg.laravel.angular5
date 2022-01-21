import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProgramDesignerWriteReviewModalComponent } from './write-review-modal/write-review-modal.component';

@Component({
  selector: 'osg-program-designer-experience-reviews',
  templateUrl: './experience-reviews.component.html'
})
export class ProgramDesignerExperienceReviewsComponent implements OnInit {

  @Input() applicationUser: ApplicationUser;

  get first_program() {
    return this.dataService.first_program;
  }

  get reviews() {
    return this.dataService.reviews;
  }
  set reviews(val) {
    this.dataService.reviews = val;
  }

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, private spinner: NgxSpinnerService, private http: HttpClient, private dataService: DataService) {}

  customOptions: OwlOptions = {
    stagePadding: 0,
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: true,
    items: 1
  }
  // reviews: Array<Number>;
  width: string;

  // reviews: [];
  user_name: '';
  rate_value = [
    'zero', 'worst', 'worse', 'middle', 'good', 'excellent'
  ];

  ngOnInit(): void {
    this.width = window.innerWidth.toString();
  }

  onWriteReview() {
    this.bsModalRef = this.modalService.show(
      ProgramDesignerWriteReviewModalComponent,
      {
          class: 'review-modal',
      }
    );
  }

  viewAllReviews() {
    if (this.first_program == undefined)
      window.location.href = "/#/reviews?program_id=0";
    else
      window.location.href="/#/reviews?program_id=" + this.first_program['id'];
  }

}
