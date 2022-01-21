import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { DataService } from '../../../data.service';
import { MOVEMENTS, PROGRESSION_MODELS } from '../../../constants';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'osg-program-design',
    templateUrl: './program-design.component.html'
})
export class ProgramDesignComponent implements OnInit {
  @Input() profile_view: boolean = false;

  movement = MOVEMENTS
  model_option = PROGRESSION_MODELS

  @Input() applicationUser: ApplicationUser;

  get data() {
    return this.dataService.sharedData;
  }
  set data(val) {
    this.dataService.sharedData = val;
  }
  get design_data() {
    return this.dataService.design_data;
  }
  get progression_models() {
    return this.dataService.progression_models;
  }
  set progression_models(val) {
    this.dataService.progression_models = val;
  }

  get cur_program_id() {
    return this.dataService.cur_program_id;
  }

  get design_data_change() {
    return this.dataService.design_data_change$;
  }

  get first_program() {
    return this.dataService.first_program;
  }

  constructor(private dataService: DataService, private http: HttpClient, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  onChangeModel = (event, index) => {
    console.log('>>> event: ', event)
    console.log('>>> event target value: ', event.target.value);
    this.design_data[index].progression_model = event.target.value;
    this.progression_models[this.design_data[index].name] = event.target.value;

    console.log('>>> this.design_data: ', this.design_data)
  }

  drawExerciseType(ary) {
    var res = '';
    ary.forEach(type => {
      res += this.movement[type-1] + ', ';
    });
    if (res.length > 2) {
      res = res.substring(0, res.length - 2);
    }
    return res;
  }

}
