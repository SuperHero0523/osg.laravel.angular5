import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'osg-workout-detail',
  templateUrl: './main.component.html'
})
export class WorkoutDetailComponent implements OnInit{
  date: string;
  autoRegulation: boolean;
  status: string;
  marginTop: string;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { 
    this.activeRoute.paramMap.subscribe(params => {
      this.date = params.get('date');
      if(params.get('type') == 'start') {
        this.status = 'Upcoming';
      } else if(params.get('type') == 'complete') {
        this.status = 'Complete';
      }
    });
    this.autoRegulation = true;
  }

  ngOnInit(): void {
    // this.router.events.subscribe((event: NavigationEnd) => {
    //   if(event instanceof NavigationEnd) {
    //     window.scrollTo(0, 0);
    //   }
    // })
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
  getEvent(status) {
    this.status = status;
  }

  FinishWorkout() {
    if (this.status == "Complete") {
      this.status = 'completed';
    }
  }

  Back() {
    this.router.navigate(['/workout-log']);
  }
}
