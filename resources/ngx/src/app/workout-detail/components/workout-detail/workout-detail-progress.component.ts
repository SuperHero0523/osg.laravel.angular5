import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osg-workout-detail-progress',
  templateUrl: './workout-detail-progress.component.html'
})
export class WorkoutDetailProgressComponent implements OnInit{
  
  @Input() status: string;    
  reps: number = 8;
  rtf: number = 1;
  load: number = 100;

  ngOnInit(): void {}

  IncraseRTF() {
    this.rtf ++;
  }

  DecraseRTF() {
    this.rtf --;
  }

  IncraseREPS() {
    this.reps ++;
    this.load += 2.5;
  }

  DecraseREPS() {
    this.reps --;
    this.load -= 2.5;
  }
}
