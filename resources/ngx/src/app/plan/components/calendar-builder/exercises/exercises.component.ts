import {Component, Injectable, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ApplicationUser} from 'src/app/core/classes/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService  } from '../../../../core/services/data.service';

import { NgxSpinnerService } from "ngx-spinner";
export class Program {
  name: string;
  category: string;
  split: string;
  description: string;
}

@Injectable()
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'osg-plan-builder-exercises',
  templateUrl: './exercises.component.html'
})

export class PlanBuilderExercisesComponent implements OnInit {

  exercise_data = [];
  keyword = new FormControl('');
  searchEngine = null;
  program: Program = {
    name : '',
    category : '',
    split : '',
    description : ''
  };

  subscription: Subscription;

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message.info === 'saveProgram') {
        this.messageService.sendMessage('saveProgramFinally', JSON.stringify(this.program));
      }
  });
  }

  @Input() applicationUser: ApplicationUser;

  sendMessage(): void {
    // send message to subscribers via observable subject
    const data = [];

    // tslint:disable-next-line:forin
    for (const i in this.exercise_data) {
      for (const j in this.exercise_data[i]['data']) {
        if (this.exercise_data[i]['data'][j]['selected'] === true){
          this.exercise_data[i]['data'][j]['selected'] = false;
          data.push({
            exerciseCode: this.exercise_data[i]['data'][j].exercise_code,
            exerciseName: this.exercise_data[i]['data'][j].exercise_name,
            targetMuscle: this.exercise_data[i]['data'][j].target_muscles,
          });
        }
      }
    }

    this.messageService.sendMessage('addExercise', JSON.stringify(data));
  }

  clearMessage(): void {
      this.messageService.clearMessage();
  }

  ngOnInit(): void {
    this.searchExercises();
  }

  searchFunc() {
    if (this.searchEngine != null) {
      clearTimeout(this.searchEngine);
    }

    this.searchEngine = setTimeout(() => {
      console.log('Search Engine is done.');
      this.searchExercises(this.keyword.value);
      this.searchEngine = null;
    }, 500);
  }
  selectExercise(event, movement_index, code, name, index) {
    this.exercise_data[movement_index]['data'][index]['selected'] = !this.exercise_data[movement_index]['data'][index]['selected'];
  }
  searchExercises(keyword = '') {

    this.spinner.show();
    this.http.post('search/exercise', {keyword: keyword}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }).subscribe(resp => {
      if (resp != null && resp['success'] != null) {
        // tslint:disable-next-line:forin
        for (const i in resp['data']['exercise']) {
          resp['data']['exercise'][i]['data'] = resp['data']['exercise'][i]['data'] .map(item => {
            return {selected: false, ...item};
          });
        }
        this.exercise_data = resp['data']['exercise'];
        console.log(this.exercise_data);
        this.program = resp['data']['program'];

        this.spinner.hide();
      }
    });
  }

  dragExercise(e) {
      e.dataTransfer.setData('text', JSON.stringify(e.target.dataset));
      console.log(e.target.dataset);
  }
}
