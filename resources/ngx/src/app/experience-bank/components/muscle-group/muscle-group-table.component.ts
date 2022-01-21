import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../core/services/data.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MESSAGE_EXPBANK_SETINFO } from '../../../message.info';
import { Router } from '@angular/router';

@Component({
  selector: 'osg-experience-bank-muscle-group-table',
  templateUrl: './muscle-group-table.component.html'
})
export class ExperienceBankMuscleGroupTable implements OnInit{

  @Input() muscleGroup : any;

  exercises: any = null;
  selExercise: any = null;

  topPrograms: any = null;

  filter: any = { }

  subscription: Subscription;

  constructor(private router: Router, private http: HttpClient, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log('>>>> muscle group message subscribe: ', message);
      if (message.info === MESSAGE_EXPBANK_SETINFO) {
        this.filter = JSON.parse(message.text);
        this.getTopPrograms();
      }
    });
  }

  ngOnInit(): void {
    this.http.get('/getExercisesByBodypart?bodypart_id=' + this.muscleGroup.id).subscribe((resp: any) => {
      console.log('>>> get exercises by body part resp: ', resp);
      this.exercises = resp.exercises;
      this.exercises.splice(0, 0, {id: 0, name: 'All'})
      if (resp.exercises.length) {
        this.selExercise = this.exercises[0];
        this.getTopPrograms();
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  getTopPrograms() {
    if (this.selExercise == null) return;

    let body = {
      muscle_group: this.muscleGroup.id,
      exercise_id: this.selExercise.id,
      filter: JSON.stringify(this.filter)
    }

    this.http.post('/experienceBank/getTopPrograms', body).subscribe((resp: any) => {
      console.log('>>> get top programs api resp: ', resp);
      this.topPrograms = resp.top_programs;
    })
  }

  onClickExercise = (index) => {
    this.selExercise = this.exercises[index];
    this.getTopPrograms();
  }

  /**
   * go to the program designer profile with program name
   * @param programInfo
   */
  gotoProgram = (programInfo) => {
    console.log('------ program info: ', programInfo)
    this.router.navigate(['/profile/', programInfo.designer_id], { queryParams: { program: programInfo.name } });
  }

}
