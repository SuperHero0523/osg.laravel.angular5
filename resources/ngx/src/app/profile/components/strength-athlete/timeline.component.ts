import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { StrengthAthleteTrainerSettingModalComponent } from './trainer-setting-modal/trainer-setting-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../../../store/store.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../../../core/services/data.service';
import { TRAINER_CHANGED } from '../../../message.info';
import { DataService } from '../../../data.service';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'osg-strength-athlete-timeline',
  templateUrl: './timeline.component.html'
})
export class StrengthAthleteTimelineComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;
  bsModalRef: BsModalRef;

  timeline: any[] = [];
  showing_list: any[] = [];
  last_index = -1;
  start_index = 0;

  year_keys: any[] = [];
  years: any = {};
  month_list: any[] = [];

  spin_hidden = true;
  left_spin_disable = false;
  right_spin_disable = true;

  subscription: Subscription;

  get profile_user() {
    return this.dataService.profile_user;
  }

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  constructor(private http: HttpClient, private dataService: DataService, private modalService: BsModalService, private store: StoreService, private messageService: MessageService) {

    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message.info === TRAINER_CHANGED) {
        let change = JSON.parse(message.text);

        for (let program of this.timeline) {
          if (program.id == change.calendar_id) {
            program.trainer_name = change.trainer_name;
            break;
          }
        }

        for (let program of this.showing_list) {
          if (program.calendar_id == change.calendar_id) {
            program.trainer_name = change.trainer_name;
            break;
          }
        }
      }
    });
  }

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }

  ngOnInit(): void {
    console.log(">>> timeline component init")

    this.getTimeLineInformation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getTimeLineInformation() {
    let url = '/profile/getTimeLine';
    if (this.profile_user != -1)
      url += '?user_id=' + this.profile_user;

    this.http.get(url).subscribe((resp: any) => {
      if (resp.result.length > 0) {
        this.timeline = resp.result;
        this.updateTimeLine();

        this.last_index = resp.result.length - 1;
        this.getTableInformation(this.last_index);

      } else {
        this.getEmptyTable();
      }
    })
  }

  getEmptyTable() {
    let loopDate = moment().subtract(1, 'years').startOf('month').format('YYYY-MM-DD');
    while (loopDate.substring(0, 7) <= moment().format('YYYY-MM')) {
      let nextMonthDate = moment(loopDate).add(1, 'months').format('YYYY-MM-DD');
      let days = moment(nextMonthDate).diff(moment(loopDate), 'days');

      this.month_list.push({
        name: moment(loopDate).format('YYYY-MMM.'),
        days: days,
      });
      loopDate = nextMonthDate;
    }

    // get year list
    let totalDaysByMonthList = 0;
    for (let month of this.month_list) {
      let year = month.name.substring(0, 4);
      if (this.years[year] == undefined) {
        this.years[year] = month.days;
      } else {
        this.years[year] += month.days;
      }
      totalDaysByMonthList += month.days;
    }
    console.log('>>> this years: ', this.years);
    console.log('>>> years keys: ', Object.keys(this.years));
    this.year_keys = Object.keys(this.years);

    this.showing_list.push({
      space: true,
      pause: false,
      days: totalDaysByMonthList,
    })
  }

  updateTimeLine() {

    for (let program of this.timeline) {
      // get correct start date and end date, days
      let calendarData = JSON.parse(program.data);

      console.log('>>> calendar data: ', calendarData);

      // get first day
      let preEmptyDays = 0;
      let index = 0;
      for (let plan of calendarData[0]) {
        if (plan == null || plan == 'null') {
          index++;
        } else {
          preEmptyDays = index;
          break;
        }
      }

      if (index > 0) {
        console.log('>>> st program: ', program);
      }

      let start_date = program.start_date;

      program.start_date = moment(start_date).add(index, 'days').format('YYYY-MM-DD');
      program.period = moment(program.start_date).format('DD.MM.YY');

      // get last day
      let lastEmptyDays = 0;
      index = 0;
      for (let i = calendarData[calendarData.length - 1].length - 1; i >= 0; i--) {
        let plan = calendarData[calendarData.length - 1][i];
        if (plan == null || plan == 'null') {
          index++;
        } else {
          lastEmptyDays = index;
          break;
        }
      }

      program.end_date = moment(start_date).add(program.weeks, 'weeks').subtract(lastEmptyDays + 1, 'days').format('YYYY-MM-DD');
      program.period += " - " + moment(program.end_date).format('DD.MM.YY');
      program.days = 7 * program.weeks - (preEmptyDays + lastEmptyDays);

      program.bw_change = (program.post_weight - program.pre_weight).toFixed(2).replace(".", ",");
      if (program.post_weight - program.pre_weight > 0)
        program.bw_change = '+' + program.bw_change;

      let pre_waist_hip_ratio = parseFloat((program.pre_waist / program.pre_hip).toFixed(2));
      let post_waist_hip_ratio = parseFloat((program.post_waist / program.post_hip).toFixed(2));
      if (pre_waist_hip_ratio == post_waist_hip_ratio) {
        program.whr_change = "Unchanged";
      } else if (post_waist_hip_ratio > pre_waist_hip_ratio) {
        program.whr_change = "Increased";
      } else {
        program.whr_change = "Decreased";
      }
    }

    for (let i = this.timeline.length - 2; i >= 0; i--) {
      const preProgram = this.timeline[i];
      const nextProgram = this.timeline[i + 1];

      const diffDays = moment(nextProgram.start_date).diff(moment(preProgram.end_date), 'days');
      if (diffDays <= 1) continue;

      this.timeline.splice(i + 1, 0, {
        id: 0,
        days: diffDays - 1,
        start_date: moment(preProgram.end_date).add(1, 'days').format('YYYY-MM-DD'),
        end_date: moment(nextProgram.start_date).add(-1, 'days').format('YYYY-MM-DD'),
      })
    }

    // add space program at begin
    const firstDate = moment(this.timeline[0].start_date).startOf('months')
    let diffDays = moment(this.timeline[0].start_date).diff(firstDate, 'days');
    if (diffDays > 0) {
      this.timeline.splice(0, 0, {
        id: 0,
        days: diffDays,
        start_date: firstDate.format('YYYY-MM-DD'),
        end_date: moment(this.timeline[0].start_date).add(-1, 'days').format('YYYY-MM-DD'),
      })
    }

    // add space program at end
    let lastDate = moment().endOf('month').format('YYYY-MM-DD');
    if (this.timeline[this.timeline.length - 1].end_date > lastDate) {
      lastDate = moment(this.timeline[this.timeline.length - 1].end_date).endOf('month').format('YYYY-MM-DD');
    }
    diffDays = moment(lastDate).diff(moment(this.timeline[this.timeline.length - 1].end_date), 'days');
    if (diffDays > 0) {
      this.timeline.push({
        id: 0,
        days: diffDays,
        start_date: moment(this.timeline[this.timeline.length - 1].end_date).add(1, 'days').format('YYYY-MM-DD'),
        end_date: lastDate,
      })
    }

    console.log('>> time line information: ', this.timeline);

    // check if spin should exist
    let before_year_month = moment(lastDate).subtract(1, 'years').format('YYYY-MM');
    if (moment(this.timeline[0].end_date).format('YYYY-MM') < before_year_month) {
      this.spin_hidden = false;
    } else {
      this.spin_hidden = true;
    }
  }

  getTableInformation(lastIndex) {
    // calculate date before 1 year ago
    let before_year_month = moment(this.timeline[lastIndex].end_date).subtract(1, 'years').add(1, 'months').format('YYYY-MM');

    this.showing_list = [];
    this.month_list = [];
    this.year_keys = [];
    this.years = {};

    // get start index
    let startIndex = -1;
    for (let i = lastIndex - 1; i >= 0; i--) {
      let program = this.timeline[i];
      if (moment(program.end_date).format('YYYY-MM') < before_year_month) {
        startIndex = i + 1;
        break;
      }
    }

    if (startIndex == -1)
      startIndex = 0;

    console.log('--------- before_year_month: ', before_year_month);
    console.log('--------- start program: ', this.timeline[startIndex]);

    this.start_index = startIndex;

    // get month list
    let loopMonth = before_year_month + '-01';
    while (loopMonth.substring(0, 7) <= this.timeline[lastIndex].end_date.substring(0, 7)) {
      let nextMonthDate = moment(loopMonth).add(1, 'months').format('YYYY-MM-DD');
      let days = moment(nextMonthDate).diff(moment(loopMonth), 'days');

      this.month_list.push({
        name: moment(loopMonth).format('YYYY-MMM.'),
        days: days
      });
      loopMonth = nextMonthDate;
    }
    console.log('>>> this month list: ', this.month_list);

    // get year list
    let totalDaysByMonthList = 0;
    for (let month of this.month_list) {
      let year = month.name.substring(0, 4);
      if (this.years[year] == undefined) {
        this.years[year] = month.days;
      } else {
        this.years[year] += month.days;
      }
      totalDaysByMonthList += month.days;
    }
    console.log('>>> this years: ', this.years);
    console.log('>>> years keys: ', Object.keys(this.years));
    this.year_keys = Object.keys(this.years);

    // showing total days
    let first_day = before_year_month + '-01';
    let totalDays = moment(this.timeline[lastIndex].end_date).endOf('month').diff(moment(first_day), 'days') + 1;

    let totalDaysByList = 0;

    // get list
    for (let i = startIndex; i <= lastIndex; i++) {
      // get real program rec
      let program = this.timeline[i];
      let days = program.days;
      if (i == startIndex) {
        days = moment(program.end_date).diff(moment(first_day), 'days') + 1;
      }

      if (program.id == 0) {

        let beforeExist = false;
        for (let j = i - 1; j >= 0; j--) {
          if (this.timeline[j].id != 0) {
            beforeExist = true;
            break;
          }
        }

        let afterExist = false;
        for (let j = i + 1; j < this.timeline.length; j++) {
          if (this.timeline[j].id != 0) {
            afterExist = true;
            break;
          }
        }

        this.showing_list.push({
          space: true,
          full_pause: beforeExist && afterExist && program.days >= 30,
          days: days,
        })

      } else {
        let showing_program = {
          space: false,
          full_pause: false,
          days: days,
          calendar_id: program.id,
          program_name: program.program_name,
          period: program.period,
          category: program.category,
          bw_change: program.bw_change,
          whr_change: program.whr_change,
          sleep_level: "",
          stress_level: "",
          energy_level: "",
          trainer_name: program.trainer_name,
          start_date: program.start_date,
          end_date: program.end_date,
        }

        // sleep level
        if (0 <= program.sleep_level && program.sleep_level <= 3)
          showing_program.sleep_level = "need-improvement";
        else if (4 <= program.sleep_level && program.sleep_level <= 6)
          showing_program.sleep_level = "ok";
        else
          showing_program.sleep_level = "good";

        // stress level
        if (0 <= program.stress_level && program.stress_level <= 3)
          showing_program.stress_level = "need-improvement";
        else if (4 <= program.stress_level && program.stress_level <= 6)
          showing_program.stress_level = "ok";
        else
          showing_program.stress_level = "good";

        // energy level
        if (0 <= program.energy_level && program.energy_level <= 3)
          showing_program.energy_level = "need-improvement";
        else if (4 <= program.energy_level && program.energy_level <= 6)
          showing_program.energy_level = "ok";
        else
          showing_program.energy_level = "good";

        this.showing_list.push(showing_program);
      }

      totalDaysByList += days;
    }

    // process last index
    const lastProgram = this.timeline[lastIndex];
    if (moment(lastProgram.end_date).format('YYYY-MM-DD') != moment(lastProgram.end_date).endOf('month').format('YYYY-MM-DD')) {
      const days = moment(lastProgram.end_date).endOf('month').diff(moment(lastProgram.end_date), 'days');
      if (lastIndex + 1 < this.timeline.length) {
        const program = this.timeline[lastIndex + 1];

        if (program.id > 0) {
          let showing_program = {
            space: false,
            full_pause: false,
            days: days,
            calendar_id: program.id,
            program_name: program.program_name,
            period: program.period,
            category: program.category,
            bw_change: program.bw_change,
            whr_change: program.whr_change,
            sleep_level: "",
            stress_level: "",
            energy_level: "",
            trainer_name: program.trainer_name,
            start_date: program.start_date,
            end_date: program.end_date,
          }

          // sleep level
          if (0 <= program.sleep_level && program.sleep_level <= 3)
            showing_program.sleep_level = "need-improvement";
          else if (4 <= program.sleep_level && program.sleep_level <= 6)
            showing_program.sleep_level = "ok";
          else
            showing_program.sleep_level = "good";

          // stress level
          if (0 <= program.stress_level && program.stress_level <= 3)
            showing_program.stress_level = "need-improvement";
          else if (4 <= program.stress_level && program.stress_level <= 6)
            showing_program.stress_level = "ok";
          else
            showing_program.stress_level = "good";

          // energy level
          if (0 <= program.energy_level && program.energy_level <= 3)
            showing_program.energy_level = "need-improvement";
          else if (4 <= program.energy_level && program.energy_level <= 6)
            showing_program.energy_level = "ok";
          else
            showing_program.energy_level = "good";

          this.showing_list.push(showing_program);

        } else {
          let beforeExist = false;
          for (let j = lastIndex; j >= 0; j--) {
            if (this.timeline[j].id != 0) {
              beforeExist = true;
              break;
            }
          }

          let afterExist = false;
          for (let j = lastIndex + 2; j < this.timeline.length; j++) {
            if (this.timeline[j].id != 0) {
              afterExist = true;
              break;
            }
          }

          this.showing_list.push({
            space: true,
            full_pause: beforeExist && afterExist && program.days >= 30,
            days: days,
          })
        }
      } else {
        this.showing_list.push({
          space: true,
          pause: false,
          days: days
        })
      }

      totalDaysByList += days;
    }

    console.log('>>> this showing list: ', this.showing_list);
    console.log(`>>> total days by month list: ${totalDaysByMonthList}, total days: ${totalDays}, total days by list: ${totalDaysByList}`);
  }

  addPT(calendar_id) {
    console.log('>>> add pt function: ', calendar_id);
    const initialState = {
      calendar_id: calendar_id,
    };

    this.bsModalRef = this.modalService.show(
      StrengthAthleteTrainerSettingModalComponent,
      {
        initialState,
      }
    );
    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('trainer setting modal result: ', result);
      if (result) {
        for (let program of this.timeline) {
          if (program.id == calendar_id) {
            program.trainer_name = result;
            break;
          }
        }

        for (let program of this.showing_list) {
          if (program.calendar_id == calendar_id) {
            program.trainer_name = result;
            break;
          }
        }

        for (let log of this.calendar_workout_logs) {
          if (log.id == calendar_id) {
            log.trainer_name = result;
            break;
          }
        }

        let change = {
          calendar_id: calendar_id,
          trainer_name: result
        }

        this.messageService.sendMessage(TRAINER_CHANGED, JSON.stringify(change));
      }
    })
  }

  removePT(calendar_id) {
    console.log('>>> remove pt function: ', calendar_id);
    this.http.post('/profile/removeTrainer', { calendar_id: calendar_id }).subscribe((resp: any) => {
      if (resp.success) {
        for (let program of this.timeline) {
          if (program.id == calendar_id) {
            program.trainer_name = null;
            break;
          }
        }

        for (let program of this.showing_list) {
          if (program.calendar_id == calendar_id) {
            program.trainer_name = null;
            break;
          }
        }

        for (let log of this.calendar_workout_logs) {
          if (log.id == calendar_id) {
            log.trainer_name = null;
            break;
          }
        }

        let change = {
          calendar_id: calendar_id,
          trainer_name: null
        }

        this.messageService.sendMessage(TRAINER_CHANGED, JSON.stringify(change));
      }
    })
  }

  moveLeft() {
    console.log('>>> moveLeft: ');
    if (this.start_index == 0)
      return;

    this.last_index--;
    this.getTableInformation(this.last_index);
  }

  moveRight() {
    console.log('>>> moveRight: ');

    if (this.last_index == this.timeline.length - 1)
      return;

    this.last_index++;
    this.getTableInformation(this.last_index);
  }

}
