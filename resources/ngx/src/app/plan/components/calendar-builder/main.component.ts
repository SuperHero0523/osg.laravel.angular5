import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { MessageService  } from '../../../core/services/data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DataService } from '../../../data.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class CarouselData {
  id?: number;
  title: string;
  exercise: string;
  reps: number;
  rtf: number;
  rm: string;
  method: string;
  tempo: String;
  rest_period: string;
}

@Component({
  selector: 'osg-calendar-builder',
  templateUrl: './main.component.html'
})
export class CalendarBuilderComponent implements OnInit {

  get program() {
    return this.dataService.program;
  }
  set program(val) {
    this.dataService.program = val;
  }

  get calendar_list() {
    return this.dataService.calendar_list;
  }

  get testable_exercises() {
    return this.dataService.testable_exercises;
  }

  link_name = "Read Less";
  isShow = true;

  swal: SweetAlert = _swal as any;

  @Output() complete: EventEmitter<any> = new EventEmitter();

  customOptions: OwlOptions = {
    stagePadding: 0,
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: true,
    items: 1
  };
  activeSlides: SlidesOutputData;
  width: string;
  list: Array<{id: number, img: string, title: string, type: string, items: Array<string>}> = [
    {id: 0, img: '/images/exercise.png', title: 'Bench Press', type: 'Multi Joint Exercise', items: ['Chest', 'Triceps', 'Deltoids']},
    {id: 1, img: '/images/exercise.png', title: 'Pullups', type: 'Multi Joint Exercise', items: ['Lats', 'Biceps']},
    {id: 2, img: '/images/exercise.png', title: 'Leg Press', type: 'Single Joint Exercise', items: ['Hamstrings', 'Quadriceps']},
    {id: 3, img: '/images/exercise.png', title: 'Dead Lift', type: 'Multi Joint Exercise', items: ['Hamstrings', 'Quadriceps']},
    {id: 4, img: '/images/exercise.png', title: 'Squats', type: 'Single Joint Exercise', items: ['Hamstrings', 'Quadriceps']},
    {id: 5, img: '/images/exercise.png', title: 'Leg Extension', type: 'Single Joint Exercise', items: ['Hamstrings', 'Quadriceps']},
  ];
  selected_list: Array<{id: number, img: string, title: string, type: string, items: Array<string>}> = [];
  workouts: Array<{id: number, items: Array<string>}> = [
    {id: 1, items: ['chest', 'shoulders', 'triceps']},
    {id: 2, items: ['back', 'biceps']},
    {id: 3, items: ['quadriceps', 'hamstrings', 'calves']}
  ];
  isCollapsed: Array<boolean> = [];
  current_sets: Array<number>;
  options: Array<NgxSiemaOptions> = [];
  carouselData: CarouselData[] = [
    { id: 1, title: 'set 1', exercise: 'Bench Press', reps: 11, rtf: 1, rm: '-', method: 'Straight', tempo: '3-0-1', rest_period: '03:30'},
    { id: 2, title: 'set 2', exercise: 'Bench Press', reps: 11, rtf: 1, rm: '-', method: 'Straight', tempo: '3-0-1', rest_period: '03:30'},
    { id: 3, title: 'set 3', exercise: 'Bench Press', reps: 11, rtf: 1, rm: '-', method: 'Straight', tempo: '3-0-1', rest_period: '03:30'}
  ];

  constructor(private spinner: NgxSpinnerService, private ngxSiemaService: NgxSiemaService, private http: HttpClient, private dataService: DataService, private service: MessageService) {}

  ngOnInit(): void {
    this.width = window.innerWidth.toString();

    let count = 0;
    let interval = setInterval(() => {
      console.log('>>>>>> program: ', this.program)
      if (this.program['is_saved'] == 2) {
        clearInterval(interval);
        this.next();
      }

      count++;
      if (count > 10) {
        clearInterval(interval);
      }
    }, 500);
  }

  next() {
    console.log('cur_program = ', this.program);
    if (!this.program['is_saved']) {
      this.swal({
        title: 'Program is not saved!',
        text: 'The program should be saved before proceed to Progression Builder.',
        icon: 'error',
        buttons: {
            confirm : { text: 'OK', className: 'btn-yellow-gradient' }
        }
      });
      return;
    }

    // check if the program contains at least a test exercise.
    // to do, get workout list
    // next, check if the same test workouts are in the first week and last week.
    let program_id = this.dataService.cur_program_id;
    if (program_id == -1)
      program_id == this.program['id'];

    this.spinner.show();

    this.http.post('/progression/getCalendarExercises?program_id=' + program_id, {})
      .subscribe(resp => {
        // get first week and last week plans
        const cntWeek = resp['weeks'].length;

        // get first week plans and get test exercise list on based plans
        let firstWeekPlans = [], firstWeekExercises = [];
        let days = JSON.parse(resp['weeks'][0].data);
        console.log('--- first week data: ', resp['weeks'][0].data)
        console.log('--- days: ', days)
        days.forEach(day => {
          if (day == null || day == 'null') return;
          firstWeekPlans.push(day);
        })

        resp['workouts'].forEach(workout => {
          const exercise_id = workout.exercise;
          if (this.testable_exercises.indexOf(exercise_id) != -1 && firstWeekPlans.indexOf(workout.plan) != -1) {
            firstWeekExercises.push(exercise_id);
          }
        });


        // get last week plans and get test exercise list on based plans
        let lastWeekPlans = [], lastWeekExercises = [];
        days = JSON.parse(resp['weeks'][cntWeek - 1].data);
        days.forEach(day => {
          if (day == null || day == 'null') return;
          lastWeekPlans.push(day);
        })

        resp['workouts'].forEach(workout => {
          const exercise_id = workout.exercise;
          if (this.testable_exercises.indexOf(exercise_id) != -1 && lastWeekPlans.indexOf(workout.plan) != -1) {
            lastWeekExercises.push(exercise_id);
          }
        });

        // no test exercise
        if (!firstWeekExercises.length || !lastWeekExercises.length) {
          this.swal({
            title: 'No testable exercise',
            text: 'The program should contain at least a same testable exercise in the first week and last week.',
            icon: 'error',
            buttons: {
                confirm : { text: 'OK', className: 'btn-yellow-gradient' }
            }
          });
          return;
        }

        // check if at lease a same exercise is in the first and last week
        let bExistMatchedExercise = false;
        firstWeekExercises.forEach(exercise => {
          if (lastWeekExercises.indexOf(exercise) != -1)
            bExistMatchedExercise = true;
        })

        if (!bExistMatchedExercise) {
          this.swal({
            title: 'No matched testable exercise',
            text: 'The program should contain at least a same testable exercise in the first week and last week.',
            icon: 'error',
            buttons: {
                confirm : { text: 'OK', className: 'btn-yellow-gradient' }
            }
          });
          return;
        }

        this.complete.emit(null);
        // this.service.sendMessage('proceed', ''); // no need
    });

  }

  check(key, val) {
    this.selected_list.forEach((item, index) => {
      if (key === index) {
        this.selected_list.splice(index, 1);
      }
    });
    this.list.splice(val.id, 0, val);
  }

  selectedExercise(item) {
    this.selected_list.push(item);
    this.list.forEach((val, index) => {
      if (val.id === item.id) {
        this.list.splice(index, 1);
      }
    });
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    if (this.selected_list.length !== 0 && this.activeSlides.startPosition === 1) {
      this.options = [];
      this.current_sets = [];
      this.isCollapsed = [];
      this.selected_list.forEach((item, key) => {
        this.options.push(
          {
            selector: '.siema' + item.id,
            duration: 10,
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
            },
          }
        );
        this.current_sets.push(1);
        this.isCollapsed.push(false);
      });
    }
  }

  owlCarPrev(owlCar) {
    owlCar.prev();
  }

  owlCarNext(owlCar) {
    // if (this.activeSlides.startPosition === 0) {
    //   if (this.selected_list.length > 0) {
    //     owlCar.next();
    //   } else {
    //     alert('Please select the exercise at least one.');
    //   }
    // } else {
      owlCar.next();
    // }
  }

  toggle() {
    this.isShow = !this.isShow;
    if (this.isShow)
      this.link_name = "Show Less";
    else
      this.link_name = "Show More";
  }

  onSaveProgram() {
    console.log('>>> calendar list: ', this.calendar_list);
    // check weeks length
    if (this.calendar_list.length < 2) {
      this.swal({
        title: 'Weeks Length',
        text: 'The program should include more than 2 weeks. Please add weeks.',
        icon: 'error',
        buttons: {
            confirm : { text: 'OK', className: 'btn-yellow-gradient' }
        }
      });
      return;
    }

    // check calendar list content
    for (let i = 0; i < this.calendar_list.length; i++) {
      let isAllEmpty = true;
      this.calendar_list[i].map(day_plan => {
        if (day_plan != null && day_plan != 'null' && day_plan != '')
          isAllEmpty = false;
      })

      if (isAllEmpty) {
        let weekName = (i + 1) + "th week";
        switch (i) {
          case 0: weekName = "first week"; break;
          case 1: weekName = "second week"; break;
          case 2: weekName = "third week"; break;
        }
        this.swal({
          title: 'Not Filled',
          text: 'The ' + weekName + ' is empty. Please fill the content.',
          icon: 'error',
          buttons: {
              confirm : { text: 'OK', className: 'btn-yellow-gradient' }
          }
        });
        return;
      }
    }
    this.service.sendMessage('saveProgram', '');
  }
}
