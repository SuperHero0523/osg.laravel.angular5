import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'osg-program-designer-experience-reviews',
  templateUrl: './experience-reviews.component.html'
})
export class ProgramDesignerExperienceReviewsComponent implements OnInit{
    
  @Input() applicationUser: ApplicationUser;
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
  reviews: Array<Number>;
  width: string;
  
  ngOnInit(): void {
    this.reviews = Array(5).fill(5).map((x,i)=>i);
    this.width = window.innerWidth.toString();
  }

}
