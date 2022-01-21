import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalComponent } from './modal.component';
import { StoreService } from '../../store/store.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import { MessageService } from '../../core/services/data.service';
import { MESSAGE_ATHLETE_LOGGED } from '../../message.info';
export class Workout {
  date: string;
  month: string;
  day: number;
  status: string;
  detail: string;
  type: string;
}

@Component({
  selector: 'osg-workout-log',
  templateUrl: './main.component.html'
})
export class WorkoutLogComponent implements OnInit {
  dates: Array<Workout> = new Array();
  today_info: any = {};
  current_month: string;
  current_year: Number;

  program_name: String;
  completed_session: number;
  total_session: number;
  completed_ratio: number;
  weeks_data = [];
  swal: SweetAlert = _swal as any;

  private calendarFlagSubscription: Subscription;

  constructor(
    private router: Router,
    private simpleModalService: SimpleModalService,
    private store: StoreService,
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }

  get cur_calendar_id() {
    return this.store.getCurCalendarId();
  }

  async ngOnInit() {
    this.messageService.sendMessage(MESSAGE_ATHLETE_LOGGED, "");
    console.log('>>> workout log init begin');

    if (this.calendar_workout_logs == null) {
      await new Promise((resolve) => {
        let interval = setInterval(() => {
          if (this.calendar_workout_logs) {
            clearInterval(interval);
            resolve(0);
          }
        }, 100);
      });
    }

    console.log(`>>> required post interview: `, this.required_postinterview)
    if (this.required_postinterview) {
      this.swal({
        title: '',
        text: 'Please fill out the post-interview form, in order to analyze your results.',
        icon: 'warning',
        buttons: {
          confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
        }
      }).then((value) => {
        this.router.navigate(['/interview']);
      });
    }

    console.log(`>>> required pre interview: `, this.required_preinterview)
    if (this.required_preinterview) {
      this.swal({
        title: '',
        text: 'Please fill out the pre-interview form before starting, in order to customize the program to you',
        icon: 'warning',
        buttons: {
          confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
        }
      }).then((value) => {
        this.router.navigate(['/interview']);
      });
    }

    this.getTodayInfo();
    this.refreshCalendar();

    if (this.cur_calendar_id) {
      this.http.get('/workoutlog/inprogress?calendar_id=' + this.cur_calendar_id).subscribe((resp: any) => {
        if (resp.success == false) {
          console.log('>>> inprogress failed')
          return;
        }

        this.total_session = resp.result.total;
        this.completed_session = resp.result.completed;
        this.completed_ratio = parseInt((this.completed_session * 100 / this.total_session).toFixed(0));
      })
    }
  }

  getTodayInfo() {
    this.today_info.date = moment().format('dddd, MMMM DD');
    let info = this.getDetailedInfo(moment().format('YYYY-MM-DD'), moment().add(1, 'weeks').format('YYYY-MM-DD'))
    console.log('>>> today information: ', info)

    if (info.body_parts == undefined || info.body_parts == '') {
      this.today_info.bodyParts = "";
      this.today_info.program = "";

    } else {

      console.log('>>> today information: ', info)
      let bodyParts = ""
      let bodyPartList = info.body_parts.split("/");
      if (bodyPartList.length < 2) {
        bodyParts = info.body_parts;

      } else {
        for (let i = 0; i < bodyPartList.length - 1; i++) {
          bodyParts += bodyParts == '' ? '' : ', ';
          bodyParts += bodyPartList[i].trim();
        }
        bodyParts += " & " + bodyPartList[bodyPartList.length - 1].trim();
      }

      this.today_info.bodyParts = bodyParts;
      this.today_info.program = info.program;
      this.today_info.plan = info.plan;
      this.today_info.completed = info.completed;
    }

    this.today_info.standDate = moment().format('YYYY-MM-DD');
  }

  async refreshCalendar() {

    let firstDay = moment().startOf('month').startOf('week');

    // this is logic when Monday is start of a week.
    // if Sunday is start of a week, remove this following if statement
    if (firstDay.format('YYYY-MM-DD') == moment().startOf('month').format('YYYY-MM-DD'))
      firstDay = firstDay.subtract(6, 'days');
    else
      firstDay = firstDay.add(1, 'days');

    let firstDayOfNextMonth = moment().add(1, 'months').startOf('month');
    let dates = [];
    let loopDay = firstDay;
    while (loopDay < firstDayOfNextMonth || loopDay.format('dddd') !== 'Monday'/*loopDay.format('dddd') !== 'Sunday'*//* the logic when Sunday is start of a week */) {
      dates.push(loopDay.format('YYYY-MM-DD'));
      loopDay.add(1, 'days');
    }

    // console.log(">>> calendar dates: ", JSON.stringify(dates))

    // console.log(`>>> calendar workout log: `, this.calendar_workout_logs);
    this.weeks_data = [];
    let week = [];
    let i = 0;
    for (let d of dates) {
      var detail: any = {};
      detail.standDate = d;
      detail.date = moment(d).format('D');
      detail.isToday = d == moment().format('YYYY-MM-DD');
      detail.type = "GVT";

      let detailed = await this.getDetailedInfo(moment(d).format('YYYY-MM-DD'), loopDay.format('YYYY-MM-DD'));
      if (detailed.body_parts != undefined) {
        detail.plan = detailed.plan;
        detail.bodyParts = detailed.body_parts;
        detail.completed = detailed.completed;
        detail.testSession = detailed.test_session;
        detail.program = detailed.program;

      } else {
        detail.plan = "";
        detail.bodyParts = "";
        detail.completed = false;
        detail.testSession = false;
        detail.program = "";
      }

      if (detail.bodyParts != '') {
        if (detail.completed) {
          detail.status = 'completed';
        } else if (d >= moment().format('YYYY-MM-DD')) {
          detail.status = 'upcoming';
        } else {
          detail.status = 'missed';
        }
      }

      if (i % 7 == 0 && i > 0) {
        this.weeks_data.push(JSON.parse(JSON.stringify(week)));
        console.log(`>>> week data: `, JSON.parse(JSON.stringify(week)));
        week = [];
      }

      week.push(detail);
      i++;
    }
    this.weeks_data.push(JSON.parse(JSON.stringify(week)));

    // console.log(">>> final calendar dates: ", JSON.stringify(this.weeks_data))
  }

  getDetailedInfo(strDate, strEndDate): any {
    // console.log(`>>> date: ${strDate}, end date: ${strEndDate} `);
    // console.log(`>>> calendar_workout_logs: `, this.calendar_workout_logs);
    for (let log of this.calendar_workout_logs) {
      if (strEndDate <= log.start_date) continue;

      let end_date = moment(log.start_date).add(log.weeks, 'weeks').format('YYYY-MM-DD')

      if (end_date <= strDate) continue;

      let i: number = 0;
      let loopDay = log.start_date;
      while (loopDay < end_date) {
        if (loopDay == strDate) {
          let index: number = Math.floor(i / 7);

          // console.log(`>>> loop day: ${loopDay}, index: ${index}, log: `, log);
          let bodypart = log.weeks_data[index][i % 7];
          if (bodypart == null || bodypart == '') {
            return {}
          }
          bodypart.program = log.program_name;

          return bodypart;
        }
        i++;
        loopDay = moment(loopDay).add(1, 'days').format('YYYY-MM-DD');
      }
    }

    return {};
  }

  showWorkout(day_data) {
    if (day_data.bodyParts == '')
      return;

    let status = "";
    if (day_data.completed) {
      status = "completed";

    } else if (day_data.standDate < moment().format('YYYY-MM-DD')) {
        status = "missed";

    } else if (day_data.standDate >= moment().format('YYYY-MM-DD')) {
      status = "upcoming";
    }

    let date = moment(day_data.standDate).format('dddd, MMMM DD')

    let bodyParts = ""
    let bodyPartList = day_data.bodyParts.split("/");
    if (bodyPartList.length < 2) {
      bodyParts = day_data.bodyParts;

    } else {
      for (let i = 0; i < bodyPartList.length - 1; i++) {
        bodyParts += bodyParts == '' ? '' : ', ';
        bodyParts += bodyPartList[i].trim();
      }
      bodyParts += " & " + bodyPartList[bodyPartList.length - 1].trim();
    }

    this.simpleModalService.addModal(
      ModalComponent,
      {
        date: date,
        standDate: day_data.standDate,
        status: status,
        detail: bodyParts,
        type: day_data.program,
        plan: day_data.plan
      },
      { closeOnEscape: true, closeOnClickOutside: true }
    );
  }

  start() {
    let date = moment().format('dddd, MMMM DD');

    let status = "start"
    if (this.today_info.completed)
      status = "completed";

    this.router.navigate(['/workout-detail', this.today_info.plan, moment().format('YYYY-MM-DD'), status]);
  }

  edit() {
    let date = moment().format('dddd, MMMM DD');

    let status = "edit"
    if (this.today_info.completed)
      status = "completed";

    this.router.navigate(['/workout-detail', this.today_info.plan, moment().format('YYYY-MM-DD'), status]);
  }
}
