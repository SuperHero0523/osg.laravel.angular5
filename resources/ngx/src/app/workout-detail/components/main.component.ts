import { Component, OnInit, Input, Output, Directive } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { Subscription } from 'rxjs';
import { MessageService } from '../../core/services/data.service';
import { DataService } from '../../data.service';
import { StoreService } from '../../store/store.service';
import * as moment from 'moment';
import { ApplicationService } from '../../core/services/application.service';
import { MESSAGE_SAVE_WORKOUTLOGS, MESSAGE_ATHLETE_LOGGED } from '../../message.info';
import { environment } from 'src/environments/environment';
import $ from 'jquery'
import { METHODS } from '../../constants';

export class CarouselData {
  id?: string;
  bodypart_name: string;
  text: string;
  exercise_id: number;
  exercise: string;
  picture: string;
  method: string;
  rest_period: string;
  tempo: string;
  intensity: number;
  rm: number;
  target_reps: string;
  target_rtf: string;
  target_load: string;
  autoreg_load: string;
  performed_reps: string;
  performed_rtf: string;
  performed_rm: string;
  completed?: boolean;
}

export class SummaryData {
  id?: string;
  plan_id: string;
  load_data: any;
  sleep_level: number;
  energy_level: number;
  stress_level: number;
  injuries: any[];
  notes: ''
}

const SIEMA_SLIDE_COLUMN_WIDTH = 86
const STATUS_COMPLETED = 'completed'

const toInteger = (strValue) => {
  if (strValue == null || strValue == 'null' || strValue == '')
    return 0;

  const intVal = parseInt(strValue);

  if (intVal != null)
    return intVal;

  return 0;
}

const toFloat = (value) => {
  if (value == undefined || value == null || value == 'null' || value == '')
    return 0;

  const floatVal = parseFloat(value.toString().replace(',', '.'));

  if (floatVal != null)
    return floatVal;

  return 0;
}

@Component({
  selector: 'osg-workout-detail',
  templateUrl: './main.component.html'
})
export class WorkoutDetailComponent implements OnInit {
  // status
  date: string;
  day: string;
  status: string;
  plan: string;
  standDate: string;

  alreadyCompleted: boolean = false;

  cur_index: any;
  view_index: any;

  // variables for performed value
  time: string;

  picture: string;
  backgroundStyle: any = {}
  bodypart: string;
  exercise: string;

  isCountingDown = false;

  reps: number;
  rtf: number;
  _reps = 0;
  _rtf = 0;

  isLoadedWorkoutData = false;

  interval = null;

  summary: SummaryData = {
    plan_id: '',
    load_data: {},
    sleep_level: 5,
    energy_level: 5,
    stress_level: 5,
    injuries: [],
    notes: ''
  };

  siemaSlideColumnWidth = 0
  SIEMA_SLIDE_COLUMN_WIDTH = 0;

  methods = ['', 'Straight set', 'Warm up set', 'Test (AMRAP) set', 'Pyramid set', 'Super set', 'Giant set', 'Pre-exhaust set', 'Drop set'];

  // sets slide options
  options: NgxSiemaOptions = {
    selector: '.siema',
    duration: 100,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: false,
    onInit: () => {
      // runs immediately after first initialization
    },
    onChange: () => {
      // runs after slide change
      console.log('>>>> on cheange siema');
    },
  };

    // carouselData: CarouselData[] = [];

  // sets statics 30 workouts because we can't show the workouts with the method that fills from empty array
  // maybe 30 is maximum exercises for a day
  carouselData: CarouselData[] = [
    { id: '1', bodypart_name: '', text: 'set 1', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '80', autoreg_load: '85', performed_reps: '11', performed_rtf: '0', performed_rm: ''},
    { id: '2', bodypart_name: '', text: 'set 2', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '3', bodypart_name: '', text: 'set 3', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '4', bodypart_name: '', text: 'set 4', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '5', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '6', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '7', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '8', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '9', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '10', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '11', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '12', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '13', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '14', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '15', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '16', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '17', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '18', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '19', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '20', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '21', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '22', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '23', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '24', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '25', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '26', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '27', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '28', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '29', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '30', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '31', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '32', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '33', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '34', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '35', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '36', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '37', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '38', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '39', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '40', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '41', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '42', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '43', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '44', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '45', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '46', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '47', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '48', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '49', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
    { id: '50', bodypart_name: '', text: 'set 5', exercise_id: 1, exercise: 'Bench Press', picture: '', method: 'Straight', rest_period: '02:00', tempo: '3-0-2-1', intensity: 0, rm: 0, target_reps: '10', target_rtf: '1', target_load: '75', autoreg_load: '0', performed_reps: '0', performed_rtf: '0', performed_rm: ''},
  ];

  applicationUser: any;
  subscription: Subscription;

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private ngxSiemaService: NgxSiemaService,
              private http: HttpClient,
              private messageService: MessageService,
              private store: StoreService,
              private readonly applicationService: ApplicationService,) {

    this.cur_index = 0;
    this.view_index = 0;

    if (this.calendar_workout_logs == null)
      this.messageService.sendMessage(MESSAGE_ATHLETE_LOGGED, this.activatedRoute.snapshot.params.handle != undefined ? this.activatedRoute.snapshot.params.handle : "");

    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log('>>> workout details message subscribe: ', message);
      if (message.info === MESSAGE_SAVE_WORKOUTLOGS) {
        this.saveWorkoutLogs();
      }
    });
  }

  /**
   * initialize
   */
  async ngOnInit() {
    this.applicationUser = await this.applicationService.getAuthenticatedUser().toPromise();
    console.log('>>> application user: ', this.applicationUser);

    this.activatedRoute.paramMap.subscribe(params => {
      console.log('>>>> workout detail params: ', params);
      this.standDate = params.get('date');
      const temp = params.get('date');
      this.day = moment(this.standDate).format('dddd');
      this.date = moment(this.standDate).format('MMM DD YYYY');
      this.status = params.get('status');
      if (this.status == STATUS_COMPLETED) {
        this.alreadyCompleted = true;
      }

      this.plan = params.get('plan');

      this.getWorkouts();
    });

    // to fix the siema issue
    this.interval = setInterval(() => {
      if ($('.siema').children('div') == undefined || $('.siema').children('div') == null) return;

      if (this.siemaSlideColumnWidth == 0)
        this.siemaSlideColumnWidth = toInteger($('.siema').children('div').css('width').replace('px', '')) / this.carouselData.length;

      if (this.siemaSlideColumnWidth == 0)
        this.siemaSlideColumnWidth = SIEMA_SLIDE_COLUMN_WIDTH;

      const preWidth = $('.siema').children('div').css('width');
      const width = `${this.siemaSlideColumnWidth * this.carouselData.length}px`;
      if (preWidth != width)
        $('.siema').children('div').css('width', width);

      const slidedWidth = this.siemaSlideColumnWidth * this.view_index;
      const preMatrix = $('.siema').children('div').css('transform');
      const matrix = `matrix(1, 0, 0, 1, -${slidedWidth}, 0)`;
      if (preMatrix != matrix)
        $('.siema').children('div').css('transform', matrix);
    }, 10)
  }

  /**
   * destroy
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.interval != null)
      clearInterval(this.interval);
  }

  /**
   * get workouts from backend
   */
  getWorkouts() {
    this.http.get('/workoutlog/getAthleteWorkouts?plan_id=' + this.plan).subscribe((resp: any) => {
      let index = 0;
      let setIndex = 1;
      let prevBodyPart = "";
      let prevWorkout = 0;
      let prevRm = 0;
      let focusIndex = -1;
      let prevExercise = 0;
      for (let workout of resp.result) {

        if (prevWorkout != workout.workout)
          setIndex = 1;

        this.carouselData[index].id = String(workout.id)
        this.carouselData[index].bodypart_name = workout.bodypart_name
        this.carouselData[index].text = "set " + setIndex
        this.carouselData[index].exercise_id = workout.exercise_id
        this.carouselData[index].exercise = workout.exercise_name
        this.carouselData[index].picture = workout.picture
        this.carouselData[index].method = workout.method
        this.carouselData[index].rest_period = workout.rest
        this.carouselData[index].tempo = workout.tempo
        this.carouselData[index].target_reps = workout.reps
        this.carouselData[index].target_rtf = workout.rtf
        this.carouselData[index].intensity = workout.intensity
        this.carouselData[index].rm = workout.rm
        this.carouselData[index].target_load = workout.target_load ? workout.target_load : ''
        this.carouselData[index].autoreg_load = workout.autoreg_load ? workout.autoreg_load : ''
        this.carouselData[index].performed_reps = workout.performed_reps == null ? workout.reps : workout.performed_reps
        this.carouselData[index].performed_rtf = workout.performed_rtf == null ? workout.rtf : workout.performed_rtf
        this.carouselData[index].performed_rm = workout.performed_rm == null || workout.performed_rm == 'null' ? "" : workout.performed_rm
        this.carouselData[index].completed = workout.performed_reps != null

        if (!this.carouselData[index].completed && focusIndex == -1)
          focusIndex = index;

        setIndex++;
        index++;

        prevBodyPart = workout.bodypart_name;
        prevWorkout = workout.workout;
        prevRm = workout.rm;
        prevExercise = workout.exercise_id;
      }
      console.log('>>> carousel data: ', this.carouselData);
      console.log('>>> focus index: ', focusIndex);

      this.carouselData.splice(resp.result.length, this.carouselData.length - resp.result.length);
      if (focusIndex == -1) {
        this.updateSummaryData();
        this.status = STATUS_COMPLETED;

      } else {
        this.cur_index = focusIndex;
        this.view_index = focusIndex;

        this.time = '02:00';
        this.refreshInformation();

        this.isLoadedWorkoutData = true;
      }
    })

    this.summary.plan_id = this.plan;

    this.http.get('/workoutlog/findSummary?plan_id=' + this.plan).subscribe((resp: any) => {
      if (resp.success) {
        this.summary.id = resp.result.id;
        this.summary.load_data = JSON.parse(resp.result.load_data);
        this.summary.sleep_level = resp.result.sleep_level;
        this.summary.energy_level = resp.result.energy_level;
        this.summary.stress_level = resp.result.stress_level;
        this.summary.injuries = JSON.parse(resp.result.injuries);
        this.summary.notes = resp.result.notes;
      }
    })
  }

  /**
   * save workout logs of the athlete
   * @returns
   */
  async saveWorkoutLogs() {
    console.log('>>> save workout logs');

    // save workout logs
    let workoutLogs = [];
    for (let log of this.carouselData) {
      workoutLogs.push({
        id: log.id,
        autoreg_load: toFloat(log.autoreg_load).toFixed(2),
        performed_rtf: log.performed_rtf,
        performed_reps: log.performed_reps,
        performed_rm: log.performed_rm
      })
    }

    let body = {
      workout_logs: JSON.stringify(workoutLogs)
    }

    this.http.post('workoutlog/saveWorkoutLogs', body).subscribe(resp => {
      console.log(">>> save workout logs result: ", resp);
    })

    // save workout tests
    let bTestWeek = false;
    let bPreTest = true;
    let weight = 0;
    let waist_hip_ratio = "0";
    let calendar_id = 0;

    console.log('>>> this plan: ', this.plan)

    // first check if this plan is involved in test week
    for (let calender of this.calendar_workout_logs) {
      let weeks = calender.weeks;
      // check first week
      for (let workout of calender.weeks_data[0]) {
        if (workout != null && workout.plan == this.plan) {
          bTestWeek = true;
          weight = calender.interviews[0].weight;
          waist_hip_ratio = (parseFloat(calender.interviews[0].waist) / parseFloat(calender.interviews[0].hip)).toFixed(2);
          calendar_id = calender.id
          break;
        }
      }

      if (bTestWeek) break;

      // next check last week
      for (let workout of calender.weeks_data[weeks - 1]) {
        if (workout != null && workout.plan == this.plan) {
          bTestWeek = true;
          bPreTest = false;
          calendar_id = calender.id
          break;
        }
      }

      if (bTestWeek) break;
    }

    if (!bTestWeek) return;

    console.log('>>> test week');

    let age = moment(this.standDate).diff(moment(this.applicationUser.profile.birth, "MM/DD/YYYY"), 'years');
    let height = this.applicationUser.profile.height.split('-')[0];
    let gender = this.applicationUser.profile.gender;
    let muscle_type = this.applicationUser.profile.muscle_type;

    // save the test exercises
    for (let log of this.carouselData) {
      if (log.method == METHODS.TEST.toString()) {  // test exercise
        let body = {
          calendar: calendar_id,
          plan: this.plan,
          exercise: log.exercise_id,
          is_pre_test: bPreTest,
          rm: log.performed_rm,
          level: null,
          gender: gender,
          height: height,
          age: age,
          weight: null,
          waist_hip_ratio: null,
          muscle_type: muscle_type
        }

        // get level
        if (bPreTest) { // if this posttest, then level weight, waist hip ratio would be gotten after post interview
          let url = 'workoutlog/getLevel?exercise=' + log.exercise_id + '&rm=' + log.performed_rm + '&weight=' + weight + '&gender=' + gender;

          let level = await new Promise((resolve) => {
            this.http.get(url).subscribe((resp: any) => {
              return resolve(resp.level);
            })
          })

          body.level = level;
          body.weight = weight;
          body.waist_hip_ratio = waist_hip_ratio;
        }

        this.http.post('workoutlog/saveWorkoutTesting', body).subscribe((resp) => {
          console.log('>>> save workout test result: ', resp);
        })

      }
    }
  }

  /**
   * save workout log of the athlete
   * @returns
   */
  async saveWorkoutLog(index) {
    console.log('>>> save workout log');

    // save workout logs
    const log = this.carouselData[index];
    let workoutLog = {
      id: log.id,
      autoreg_load: toFloat(log.autoreg_load).toFixed(2),
      performed_rtf: log.performed_rtf,
      performed_reps: log.performed_reps,
      performed_rm: log.performed_rm
    };

    let body = {
      workout_log: JSON.stringify(workoutLog)
    }

    console.log('>>> body: ', body)
    console.log('>>> log: ', log)
    this.http.post('workoutlog/saveWorkoutLog', body).subscribe(resp => {
      console.log(">>> save workout log result: ", resp);
    })

    if (log.method !== METHODS.TEST.toString())
      return;

    // save workout tests
    let bTestWeek = false;
    let bPreTest = true;
    let weight = 0;
    let waist_hip_ratio = "0";
    let calendar_id = 0;

    console.log('>>> this plan: ', this.plan)
    console.log('>>> calendar_workout_logs: ', this.calendar_workout_logs)

    // first check if this plan is involved in test week
    for (let calender of this.calendar_workout_logs) {
      let weeks = calender.weeks;
      // check first week
      for (let workout of calender.weeks_data[0]) {
        if (workout != null && workout.plan == this.plan) {
          bTestWeek = true;
          weight = calender.interviews[0].weight;
          waist_hip_ratio = (parseFloat(calender.interviews[0].waist) / parseFloat(calender.interviews[0].hip)).toFixed(2);
          calendar_id = calender.id
          break;
        }
      }

      if (bTestWeek) break;

      // next check last week
      for (let workout of calender.weeks_data[weeks - 1]) {
        if (workout != null && workout.plan == this.plan) {
          bTestWeek = true;
          bPreTest = false;
          calendar_id = calender.id
          break;
        }
      }

      if (bTestWeek) break;
    }

    if (!bTestWeek) return;

    console.log('>>> test week');

    let age = moment(this.standDate).diff(moment(this.applicationUser.profile.birth, "MM/DD/YYYY"), 'years');
    let height = this.applicationUser.profile.height.split('-')[0];
    let gender = this.applicationUser.profile.gender;
    let muscle_type = this.applicationUser.profile.muscle_type;

    // save the test exercises
    let test_body = {
      calendar: calendar_id,
      plan: this.plan,
      exercise: log.exercise_id,
      is_pre_test: bPreTest,
      rm: log.performed_rm,
      level: null,
      gender: gender,
      height: height,
      age: age,
      weight: null,
      waist_hip_ratio: null,
      muscle_type: muscle_type
    }

    // get level
    if (bPreTest) { // if this posttest, then level weight, waist hip ratio would be gotten after post interview
      let url = 'workoutlog/getLevel?exercise=' + log.exercise_id + '&rm=' + log.performed_rm + '&weight=' + weight + '&gender=' + gender;

      let level = await new Promise((resolve) => {
        this.http.get(url).subscribe((resp: any) => {
          return resolve(resp.level);
        })
      })

      test_body.level = level;
      test_body.weight = weight;
      test_body.waist_hip_ratio = waist_hip_ratio;
    }

    this.http.post('workoutlog/saveWorkoutTesting', test_body).subscribe((resp) => {
      console.log('>>> save workout test result: ', resp);
    })
  }

  /**
   * after view init
   */
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  /**
   * this is called when the user change rtf value
   * @param event
   * @param i
   */
  onChangeRtf(event, i) {
    this.carouselData[i].performed_rtf = event.target.value;
    if (i == this.cur_index) {
      this.rtf = event.target.value;
    }
  }

  /**
   * this is called when the user change reps value
   * @param event
   * @param i
   */
  onChangeReps(event, i) {
    this.carouselData[i].performed_reps = event.target.value;
    if (i == this.cur_index) {
      this.reps = event.target.value;
    }
  }

  /**
   * get emit performed reps and rtf
   * @param event
   * @returns
   */
  valueChange(event) {
    if (this.isCountingDown) return;

    console.log('event: ', event);
    this.reps = event.reps;
    this.carouselData[this.cur_index].performed_reps = event.reps;

    this.rtf = event.rtf;
    this.carouselData[this.cur_index].performed_rtf = event.rtf;
  }

  /**
   * this is called when the user clicks < button
   * @returns
   */
  slidePrev() {
    if (this.view_index == 0) return;

    this.ngxSiemaService.prev(1)
      .subscribe((data: any) => {
        console.log(`>>> slide prev data: `, data);
        this.view_index = Math.max(0, this.view_index - 1);
        this.refreshInformation();
      });
  }

  /**
   * this is called when the user clicks > button
   * @returns
   */
  slideNext() {
    if (this.view_index == this.carouselData.length - 1) return;

    this.ngxSiemaService.next(1)
      .subscribe((data: any) => {
        console.log(`>>> slide next data: `, data);
        this.view_index = Math.min(this.carouselData.length - 1, this.view_index + 1);
        this.refreshInformation();
      });
  }

  /**
   * this is called when the user clicks refresh button
   * @returns
   */
  slideRefresh() {
    this.ngxSiemaService.goTo(this.cur_index)
      .subscribe((data: any) => {
        console.log(`>>> slide refresh data: `, data);
        this.view_index = this.cur_index;
        this.refreshInformation();
      });
  }

  /**
   * update information
   * @returns
   */
  refreshInformation() {
    if (this.carouselData.length == 0) return;

    if (!this.isCountingDown)
      this.time = this.carouselData[this.view_index].rest_period;

    this.picture = this.carouselData[this.view_index].picture;
    let bodypart = this.carouselData[this.view_index].bodypart_name;
    if (bodypart != '')
      this.bodypart = bodypart[0] + bodypart.substring(1).toLowerCase();
    this.exercise = this.carouselData[this.view_index].exercise;

    this.backgroundStyle = {
      'background': 'url(/' + this.picture + ') center center / contain no-repeat white',
    }

    console.log('background style: ', this.backgroundStyle);

    let performed_reps = this.carouselData[this.view_index].performed_reps;
    let performed_rtf = this.carouselData[this.view_index].performed_rtf;

    this.reps = toInteger(performed_reps);
    this.rtf = toInteger(performed_rtf);
  }

  /**
   * back to workout log page
   */
  back() {
    this.router.navigate(['/workout-log']);
  }

  /**
   * reset
   */
  reSet() {
    if (this.isCountingDown) {
      this.isCountingDown = false;
    } else {
      this.cur_index = Math.max(0, this.cur_index - 1)
    }

    this.view_index = this.cur_index;
    this.refreshInformation();

    this.ngxSiemaService.goTo(this.cur_index)
      .subscribe((data: any) => {
        return "";
      });
  }

  /**
   * update rms
   * @param index
   */
  updateRm(index) {
    // calculate performed value
    const w = toFloat(this.carouselData[index].autoreg_load);
    const r = toFloat(this.carouselData[index].performed_reps) + toFloat(this.carouselData[index].performed_rtf);
    const updatedRm = (w * (1 + r / 30.0)).toFixed(2);

    // update autoreg_load for the same exercise of workout
    for (let i = index + 1; i < this.carouselData.length; i++) {
      if (this.carouselData[i].exercise_id == this.carouselData[index].exercise_id) {
        this.carouselData[i].autoreg_load = (toFloat(updatedRm) * this.carouselData[i].intensity / 100).toFixed(2);
      }
    }

    // update rm for the same exercise of workout and future workout of the same program
    let body = {
      plan_id: this.plan,
      detail_id: this.carouselData[index].id,
      exercise_id: this.carouselData[index].exercise_id,
      updated_rm: updatedRm
    }
    this.http.post('/workoutlog/updateRm', body).subscribe((resp: any) => {
      if (resp.success) {
      }
    })
  }

  /**
   * update summary data
   */
  updateSummaryData() {
    let loadData = {
      bodypartLoadDatas: [],
      totalDiff: 0,
    };
    let bodypartNameList = []

    for (let carousel of this.carouselData) {
      if (bodypartNameList.indexOf(carousel.bodypart_name) == -1)
        bodypartNameList.push(carousel.bodypart_name);
    }

    let totalDiff = 0;
    for (let bodypartName of bodypartNameList) {
      let targetLoadSum = 0;
      let autoregSum = 0;
      this.carouselData.map((carousel) => {
        if (carousel.bodypart_name == bodypartName) {
          targetLoadSum += Number(carousel.target_load.replace(',', '.'));
          autoregSum += Number(carousel.autoreg_load.replace(',', '.'));
        }
      })

      let diff = Number((autoregSum - targetLoadSum).toFixed(2));

      loadData.bodypartLoadDatas.push({
        bodypart: bodypartName,
        target: targetLoadSum.toFixed(2),
        performed: autoregSum.toFixed(2),
        diff: diff
      })

      totalDiff += diff;
    }
    loadData.totalDiff = Number(totalDiff.toFixed(2));

    this.summary.load_data = loadData;

    // set injuries
    for (let bodypartName of bodypartNameList) {
      this.summary.injuries.push({
        bodypart: bodypartName,
        active: false,
      })
    }

    console.log('>>> carousel datas: ', this.carouselData);
    console.log('>>> summary: ', this.summary);
  }

  /**
   * This is called when the user clicks "OK" button
   * @returns
   */
  async finishSet() {

    if (this.isCountingDown) return;

    this.view_index = this.cur_index;
    this.ngxSiemaService.goTo(this.view_index)
      .subscribe((data: any) => {
        return "";
      });

    this.refreshInformation();

    const curSetData = this.carouselData[this.cur_index];
    if (parseInt(curSetData.target_reps) != parseInt(curSetData.performed_reps)
      || parseInt(curSetData.target_rtf) != parseInt(curSetData.performed_rtf)) {
      this.updateRm(this.cur_index);
    }

    // calculate performed one repetition maximum value
    const w = toFloat(curSetData.autoreg_load);
    let r = toFloat(curSetData.performed_reps);
    const performedRm = (w * (1 + r / 30.0)).toFixed(2);
    this.carouselData[this.cur_index].performed_rm = performedRm;

    // save the workout log
    this.saveWorkoutLog(this.cur_index);

    let rest_min = Number(this.time.split(':')[0]);
    let rest_sec = Number(this.time.split(':')[1]);

    // count down
    if (this.cur_index < this.carouselData.length - 1) {

      if (environment.production) {
        this.isCountingDown = true;

        const startTime = new Date().getTime();

        // must uncomment after testing
        let countdownResult = await new Promise((resolve: any) => {
          const totalSec: number = rest_min * 60 + rest_sec;
          let timer = setInterval(() => {

            if (!this.isCountingDown) {
              clearInterval(timer);
              return resolve(false);
            }

            const restTime = totalSec - Math.floor((new Date().getTime() - startTime) / 1000);

            if (restTime == 0) {
              clearInterval(timer);
              return resolve(true);
            }
            let min = Math.floor(restTime / 60);
            let sec = restTime % 60;
            if (sec < 10)
              this.time = String(min) + ":0" + String(sec);
            else
              this.time = String(min) + ":" + String(sec);

          }, 1000)
        })

        if (!countdownResult) {
          return;
        }

        this.isCountingDown = false;
      }

      this.cur_index += 1;
      this.ngxSiemaService.goTo(this.cur_index)
      .subscribe((data: any) => {
        console.log(`>>> slide next data: `, data);
        this.view_index = this.cur_index;
        this.refreshInformation();
      });

    } else {
      this.updateSummaryData();
      this.status = STATUS_COMPLETED;
    }
  }
}
