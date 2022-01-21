import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../../../data.service';
import * as moment from 'moment';

@Component({
  selector: 'osg-program-designer-training-day-modal',
  templateUrl: './training-day-modal.component.html',
})

export class ProgramDesignerTrainingDayModalComponent {

  get data() {
    return this.dataService.sharedData;
  }
  set data(val) {
    this.dataService.sharedData = val;
  }

  get weeks() {
    return this.dataService.weeks;
  }
  set weeks(val) {
    this.dataService.weeks = val;
  }

  get plans() {
    return this.dataService.plans;
  }
  set plans(val) {
    this.dataService.plans = val;
  }

  get workouts() {
    return this.dataService.workouts;
  }
  set workouts(val) {
    this.dataService.workouts = val;
  }

  get design_data() {
    return this.dataService.design_data;
  }
  set design_data(val) {
    this.dataService.design_data = val;
  }

  get cur_week() {
    return this.dataService.cur_week;
  }
  set cur_week(val) {
    this.dataService.cur_week = val;
  }

  get cur_day() {
    return this.dataService.cur_day;
  }
  set cur_day(val) {
    this.dataService.cur_day = val;
  }

  get week_start_date() {
    return this.dataService.week_start_date;
  }

  onClose: EventEmitter<any> = new EventEmitter();
  onComplete: EventEmitter<any> = new EventEmitter();

  public options = [
    '',
    'Straight set',
    'Warm up set',
    'Test (AMRAP) set',
    'Pyramid set',
    'Super set',
    'Giant set',
    'Pre-exhaust set',
    'Drop set'
  ];

  cur_date_string: string = ""

  constructor(
    private readonly bsModalRef: BsModalRef,
    private dataService: DataService
  ) { }

  async ngOnInit() {
    console.log('>>> data in training day modal:', this.data)
    this.cur_date_string = moment(this.week_start_date).add(this.cur_week * 7 + this.cur_day, 'days').format('ddd, Do MMMM YYYY');
  }


  close(): void {
    this.onClose.emit(null);
    this.bsModalRef.hide();
  }

}
