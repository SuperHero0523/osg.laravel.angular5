import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription, Subject } from 'rxjs';
import { StoreService } from '../../../store/store.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StrengthAthleteNotesViewModalComponent } from './notes-view-modal/notes-view-modal.component';
import { StrengthAthleteWriteReviewModalComponent } from './write-review-modal/write-review-modal.component';
@Component({
  selector: 'osg-strength-athlete-performance-table',
  templateUrl: './performance-table.component.html'
})
export class StrengthAthletePerformanceTableComponent implements OnInit{

  @Input() applicationUser: any;

  comparisons: any[];
  program_info = {
    name: '', category: '', period: '', trainer_name: '', calendar_id: 0
  }
  tests: Array<{exercise_name: string, pre_rm: any, post_rm: any, pre_level: any, post_level: any, increased: number, color: string}> = [
    // {exercise_name:'bench press', pre_rm: 44, post_rm: 55, pre_level: 'Untrained', post_level: 'Untrained', increased: 14, color: 'blue'},
    // {exercise_name:'bench press', pre_rm: 44, post_rm: 55, pre_level: 'Untrained', post_level: 'Untrained', increased: 14, color: 'blue'},
    // {exercise_name:'bench press', pre_rm: 44, post_rm: 55, pre_level: 'Untrained', post_level: 'Untrained', increased: 14, color: 'blue'},
    // {title:'squat', type:'squat', value:45, color: 'orange'},
    // {title:'deadlift', type:'dead', value:57, color: 'green'}
  ];

  sliders: Array<{title: string, value: number, color: string}> = [
    {title:'sleep', value: -1, color: 'purple'},
    {title:'stress press', value: -1, color: 'red'},
    {title:'energy', value: -1, color: 'orange'}
  ];

  // graph data and weeks information
  graph_data: any = {
    loads: [],
    sleep: [],
    stress: [],
    energy: []
  }
  graph_weeks = []

  auto_reg: boolean = true;
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

  review = {
    content: '',
    score: -1,
  }

  rate_value = [
    'zero', 'worst', 'worse', 'middle', 'good', 'excellent'
  ];

  width: string;

  calendar_list = [];
  sel_calendar: any = { id: 0, program_id: 0, program_name: '' };

  program_summary = {
    total: 0,
    missed: 0,
    completed: 0,
    percentage: "0"
  }

  notes = [];

  variables:{age: number, muscle_type: string, height: string, gender: string}  = {
    age: 0, muscle_type: '', height: '0', gender: ''
  };

  bsModalRef: BsModalRef;
  constructor(private store: StoreService, private http: HttpClient, private dataService: DataService, private modalService: BsModalService) {
    const subscription = this.store.calendarWorkoutLogsFlagObservable$.subscribe(() => {
      this.refreshPerformance(this.sel_calendar);
      // this.chart.data.columns.splic(0, 1, )
    });
  }

  get cur_calendar_id() {
    return this.store.getCurCalendarId();
  }

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  get profile_user() {
    return this.dataService.profile_user;
  }

  interviewDatas = [
    { weight: '', ratio: '', age: '', injury: '' },
    { weight: '', ratio: '', age: '', injury: '' },
    { weight: '', ratio: '', age: '', injury: '' },
  ];

  async ngOnInit() {
    console.log(">>> performance-table component init: ", this.interviewDatas);

    if (this.applicationUser != null) {
      console.log('>>> application user on the performation table: ', this.applicationUser)
      if (this.applicationUser.profile != null) {
        let currentDate = new Date();
        var birthDate = this.applicationUser.profile.birth.split("/")[2];
        this.variables.age = currentDate.getFullYear() - birthDate;
        this.variables.muscle_type = this.applicationUser.profile.muscle_type;
        this.variables.height = this.applicationUser.profile.height;
        this.variables.gender = this.applicationUser.profile.gender;
      }
    }

    this.width = window.innerWidth.toString();

    await new Promise(resolve => {
      let interval = setInterval(() => {
        if (this.calendar_workout_logs) {
          clearInterval(interval);
          resolve(0);
        }
      }, 100);
    })

    console.log('>>> performance table program click');
    let selIndex = -1;
    let curDate = moment().format('YYYY-MM-DD');

    this.calendar_workout_logs.map(log => {
      this.calendar_list.push({
        id: log.id,
        program_id: log.program_id,
        program_name: log.program_name
      })
    })

    for (let i = this.calendar_workout_logs.length - 1; i >= 0; i--) {
      let log = this.calendar_workout_logs[i];

      if (selIndex == -1 && log.start_date < curDate) {
        this.onClickProgram(this.calendar_list[i]);
        selIndex = i;
        break;
      }
    }

    if (selIndex == -1 && this.calendar_workout_logs.length) {
      let log = this.calendar_workout_logs[0];
      this.onClickProgram(this.calendar_list[0]);
    }
  }

  ngOnDestroy(): void {
    // this.calendarFlagSubscription.unsubscribe()
  }

  onChangeAutoReg(val) {
    this.auto_reg = val;
  }

  refreshPerformance(calendar) {

    this.graph_data = JSON.parse(JSON.stringify({
      loads: [],
      sleep: [],
      stress: [],
      energy: [],
      sleep_graph: [],
      stress_graph: [],
      energy_graph: [],
      days: [],
    }));

    this.graph_weeks = [];
    this.notes = [];
    this.interviewDatas = [
      { weight: '', ratio: '', age: '', injury: '' },
      { weight: '', ratio: '', age: '', injury: '' },
      { weight: '', ratio: '', age: '', injury: '' },
    ];

    console.log('--------- calendar_workout_logs: ', this.calendar_workout_logs);
    for (let log of this.calendar_workout_logs) {
      if (log.id == calendar.id) {

        // first, set program information
        let start_date = moment(log.start_date).format('DD.MM.YY');
        let end_date = moment(log.start_date).add(log.weeks, 'weeks').subtract(1, 'days').format('DD.MM.YY');
        let period = start_date + ' ~ ' + end_date;
        this.program_info = { name: log.program_name, category: log.category, period: period, trainer_name: log.trainer_name, calendar_id: log.id }

        this.tests = [];

        // next, set testing exercises
        for (let test_info of log.tests) {
          // {title:'bench press', type:'bench', value:8, color: 'blue'},
          // exercise_name:'bench press', pre_rm: 44, post_rm: 55, pre_level: 'Untrained', post_level: 'Untrained', increased: 14, color: 'blue'

          let test = {
            exercise_name: test_info.exercise_name,
            pre_rm: test_info.pre_rm,
            post_rm: test_info.post_rm,
            pre_level: test_info.pre_level,
            post_level: test_info.post_level,
            increased: test_info.increased,
            color: ''
          }

          test.color = 'blue';
          if (test_info.post_rm && test_info.pre_rm) {
            if (test.increased >= 50)
              test.color = 'green';
            else if (test.increased >= 20)
              test.color = 'orange';
            else
              test.color = 'blue';
          }

          this.tests.push(test);
        }

        // next, set the average levels of sleep, stress, energy, and graph datas
        let sleep_value = 0;
        let stress_value = 0;
        let energy_value = 0;
        let count = 0;

        let total_session = 0;
        let completed_session = 0;
        let missed_session = 0;

        let loop_date = log.start_date;
        for (let week of log.weeks_data) {
          let testWeek = false;
          for (let day of week) {
            console.log('>>> day: ', day);

            if (day != undefined) {
              if (day.summary != undefined) {
                this.graph_data.sleep.push(day.summary.sleep_level - 5);
                this.graph_data.stress.push(day.summary.stress_level - 5 + 0.1);
                this.graph_data.energy.push(day.summary.energy_level - 5 + 0.2);

                let loads = JSON.parse(day.summary.load_data);
                console.log('>>> loads : ', loads);
                let totalLoads = 0;
                for (let data of loads.bodypartLoadDatas) {
                  totalLoads += data.target;
                }
                console.log('>>> total loads : ', totalLoads);
                console.log('>>> total diff : ', loads.totalDiff);
                let loadValue = "0.05";
                if (Number(totalLoads) > 0 && Number(loads.totalDiff) > 0)
                  loadValue = (Number(loads.totalDiff) * 10 / Number(totalLoads)).toFixed(2);

                console.log('>>> load value: ', loadValue);
                this.graph_data.loads.push(parseFloat(loadValue));

                sleep_value += day.summary.sleep_level;
                stress_value += day.summary.stress_level;
                energy_value += day.summary.energy_level;
                count++;

                if (day.summary.notes != undefined && day.summary.notes != null && day.summary.notes != '') {
                  this.notes.push({
                    date: moment(loop_date).format('MM.DD.YY'),
                    standDate: loop_date,
                    notes: day.summary.notes,
                  })
                }
              } else {
                this.graph_data.sleep.push(null);
                this.graph_data.stress.push(null);
                this.graph_data.energy.push(null);
                this.graph_data.loads.push(0);
              }

              if (day.test_session) testWeek = true;

              total_session++;

              if (day.completed)
                completed_session++;
              else if (loop_date < moment().format('YYYY-MM-DD')) {
                missed_session++;
              }

            } else {
              this.graph_data.sleep.push(null);
              this.graph_data.stress.push(null);
              this.graph_data.energy.push(null);
              this.graph_data.loads.push(0);
            }

            this.graph_data.days.push(day);

            loop_date = moment(loop_date).add(1, 'days').format('YYYY-MM-DD');
          }

          // push graph week information
          if (testWeek) {
            this.graph_weeks.push('Test & training week');
          } else {
            this.graph_weeks.push('Training week');
          }
        }

        console.log(`>>> sleep_value: ${sleep_value}, stress_value: ${stress_value}, energy_value: ${energy_value}`);
        this.sliders[0].value = Math.ceil(sleep_value / count);
        this.sliders[1].value = Math.ceil(stress_value / count);
        this.sliders[2].value = Math.ceil(energy_value / count);

        console.log('>>> interview data getting before');
        let i = 0;
        let endDate = moment(log.start_date).add(log.weeks, 'weeks').format('YYYY-MM-DD');
        for (let interview of log.interviews) {

          // commented temporary
          let age = moment(log.start_date).diff(moment(this.applicationUser.profile.birth, "DD/MM/YYYY"), 'years');
          if (i > 0) {
            age = moment(endDate).diff(moment(this.applicationUser.profile.birth, "DD/MM/YYYY"), 'years');
          }

          // new code for age
          // const birthYear = this.applicationUser.profile.birth.split('/')[2];
          // let year = log.start_date.split('-')[0];
          // if (i > 0)
          //   year = endDate.split('-')[0];
          // const age = year - birthYear

          this.interviewDatas[i].weight = interview.weight;
          this.interviewDatas[i].ratio = ((interview.waist / interview.hip).toFixed(2)).replace('.', ',');
          this.interviewDatas[i].age = String(age);
          this.interviewDatas[i].injury = (interview.injury != undefined && interview.injury != '' && interview.injury != 'null') ? 'yes' : 'no';

          i++;
        }

        if (log.interviews.length == 2) {
          console.log('>>> interview data: ', this.interviewDatas);
          this.interviewDatas[2].weight = String(parseInt(this.interviewDatas[1].weight) - parseInt(this.interviewDatas[0].weight))
          this.interviewDatas[2].ratio = (parseFloat(this.interviewDatas[1].ratio.replace(',', '.')) - parseFloat(this.interviewDatas[0].ratio.replace(',', '.'))).toFixed(2);
          this.interviewDatas[2].age = String(parseInt(this.interviewDatas[1].age) - parseInt(this.interviewDatas[0].age))

          if (this.interviewDatas[0].injury != this.interviewDatas[1].injury)
            this.interviewDatas[2].injury = 'yes';
          else
            this.interviewDatas[2].injury = 'no';
        }

        console.log('>>> graph data: ', JSON.parse(JSON.stringify(this.graph_data)));

        this.graph_data.sleep_graph = JSON.parse(JSON.stringify(this.graph_data.sleep));
        this.graph_data.stress_graph = JSON.parse(JSON.stringify(this.graph_data.stress));
        this.graph_data.energy_graph = JSON.parse(JSON.stringify(this.graph_data.energy));

        // fix graph data
        this.fixGraphData(this.graph_data.sleep_graph);
        this.fixGraphData(this.graph_data.stress_graph);
        this.fixGraphData(this.graph_data.energy_graph);

        this.graph_data.stress_graph.splice(0, 0, 'data1');
        this.graph_data.sleep_graph.splice(0, 0, 'data2');
        this.graph_data.loads.splice(0, 0, 'data3');
        this.graph_data.energy_graph.splice(0, 0, 'data4');
        this.graph_data.days.splice(0, 0, 'days');

        console.log('>>> graph data: ', this.graph_data);
        this.store.setGraphData(this.graph_data);

        this.program_summary = {
          total: total_session,
          completed: completed_session,
          missed: missed_session,
          percentage: (completed_session * 100 / total_session).toFixed(0)
        }
        break;
      }
    }
  }

  onClickProgram(calendar) {
    this.sel_calendar = calendar;

    let url = 'program/restapi?info=read-review&program_id=' + this.sel_calendar.program_id;
    if (this.profile_user != -1)
      url += '&user_id=' + this.profile_user;

    this.http.post(url, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }).subscribe((resp: any) => {
      this.review = resp.review;
    });

    console.log('on click program');
    this.refreshPerformance(calendar);

    // get experience bank data
    this.http.get('profile/getExperienceBank?calendar_id=' + calendar.id).subscribe((resp: any) => {
      if (resp.success == false) {
        console.log('>>> get experience bank api failed');
        return;
      }

      console.log('>>> get experience bank api result: ', resp);
      this.comparisons = resp.expBank;
    })
  }

  onWriteReview() {
    const initialState = {
      program_id: this.sel_calendar.program_id,
      program_name: this.sel_calendar.program_name,
      content: this.review.content,
      rate: this.review.score,
      // onComplete: this.onWriteReviewCompleted
      // complete: this.onWriteReviewCompleted
    };

    this.bsModalRef = this.modalService.show(
      StrengthAthleteWriteReviewModalComponent,
      {
        initialState,
        class: 'review-modal',
      }
    );
    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('>>>>>>> result: ', result)
      if (result != null) {
        this.review.content = result.content;
        this.review.score = result.score;
      }
    })
  }

  fixGraphData(datas) {
    let preIndex = -1;
    let index = 0;
    for (let data of datas) {
      if (data != null) {
        if (index > 0 && preIndex != -1) {
          let diffIndex = index - preIndex;
          for (let i = preIndex + 1; i < index; i++) {
            if (preIndex == -1) {
              datas[i] = data;
            } else {
              let valueDiff = data - datas[preIndex];
              let xDiff = i - preIndex;

              let yDelta = Number(valueDiff * xDiff / diffIndex).toFixed(2)
              let value = Number(datas[preIndex]) + Number(yDelta);
              datas[i] = value;
            }
          }
        }

        preIndex = index;
      }
      index++;
    }
  }

  onClickNoteView(note) {
    const initialState = {
      workout_date: moment(note.standDate).format('ddd, DD MMM YYYY'),
      notes: note.notes,
    };
    this.bsModalRef = this.modalService.show(
      StrengthAthleteNotesViewModalComponent,
      {
        initialState,
        class: 'note-view-modal',
      }
    );
  }
}
