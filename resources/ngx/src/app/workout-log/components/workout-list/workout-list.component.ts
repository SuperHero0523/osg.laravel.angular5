import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'osg-workout-list',
  templateUrl: './workout-list.component.html'
})
export class WorkoutListComponent implements OnInit{
  
  @Input() 
  date1: string = 'Monday, May 13';
  date2: string = 'Wednsday, May 15';
  date3: string = 'Wednsday, May 17';

  constructor( private router: Router ) {}

  ngOnInit(): void {
  }

  start(date: string) {
    var type="start";
    this.router.navigate(['/workout-detail', date, type]);
  }

  edit(date: string) {
    var type="complete";
    this.router.navigate(['/workout-detail', date, type]);
  }
}
