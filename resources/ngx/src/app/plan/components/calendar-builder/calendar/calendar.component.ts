import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApplicationUser } from 'src/app/core/classes/user';
import { Subscription } from 'rxjs';
import { MessageService  } from '../../../../core/services/data.service';
import { ApplicationService } from '../../../../core/services/application.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'osg-plan-builder-calendar',
    templateUrl: './calendar.component.html'
})
export class PlanBuilderCalendarComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private messageService: MessageService,
    private readonly applicationService: ApplicationService) {
        this.subscription = this.messageService.getMessage().subscribe(message => {
            if (message.info === 'saveWorkout' || message.info === 'deleteWorkout') {
                // message = JSON.parse(message.text);
                if (message.info === 'saveWorkout') {
                  this.loaded_workout = this.workout_list.length;
                } else {
                  this.loaded_workout = null;
                }
                this.onLoadWorkset();
            } else if (message.info === 'saveProgramFinally') {
                this.onSaveProgram(JSON.parse(message.text));
            }
        });
    }
    swal: SweetAlert = _swal as any;
    loaded_workout = null;
    message: any = {};
    subscription: Subscription;
    calendar_list: any;
    workout_list: any = [];
    calendarWorkoutDrag = 0;
    @Input() applicationUser: ApplicationUser;
    temp: any = null;

    ngOnInit(): void {
        this.onLoadWorkset();
    }
    onChangeWorkout(workout, index) {
      this.messageService.sendMessage('changeWorkout', JSON.stringify({workoutId: workout.id, workoutNumber: index}));
    }
    dragWorkoutCalendar(e) {
        this.calendarWorkoutDrag = 1;
        e.dataTransfer.setData('workoutCalendar', JSON.stringify(e.target.dataset));
    }
    allowDropWorkoutCalendar(e) {
        e.preventDefault();
    }
    dropWorkoutCalendar(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData('workoutCalendar');
        data = JSON.parse(data);
        this.calendar_list[data.weekIndex][data.dayIndex] = null;
        this.calendarWorkoutDrag = 0;
        this.temp.target.style.backgroundColor = 'white';
    }
    dragWorkout(e) {
        e.dataTransfer.setData('workout', JSON.stringify(e.target.dataset));
    }
    allowDrop(e) {
        e.preventDefault();
        if (this.temp != null) {
            this.temp.target.style.backgroundColor = 'white';
        }
        e.target.style.backgroundColor = '#fff0e8';
        this.temp = e;
        return;
    }
    drop(e) {
        e.preventDefault();
        this.temp.target.style.backgroundColor = 'white';
        let data = e.dataTransfer.getData('workout');
        if (data === '') {
            data = e.dataTransfer.getData('workoutCalendar');
            data = JSON.parse(data);
            // tslint:disable-next-line:max-line-length
            this.calendar_list[e.target.dataset.weekIndex][e.target.dataset.dayIndex] = this.calendar_list[data.weekIndex][data.dayIndex];
            this.calendar_list[data.weekIndex][data.dayIndex] = null;
            this.calendarWorkoutDrag = 0;
        } else {
            data = JSON.parse(data);
            this.calendar_list[e.target.dataset.weekIndex][e.target.dataset.dayIndex] = parseInt(data.workoutIndex, 0) + 1;
            console.log(this.calendar_list, e.target.dataset, data.workoutIndex + 1);
        }
    }
    onAddWeek() {
        this.calendar_list.push([null, null, null, null, null, null, null]);
    }
    onRemoveWeek() {
        this.calendar_list.pop();
    }
    onLoadWorkset() {
        this.http.post('program/restapi?info=get-plan', {}, {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          }).subscribe(resp => {
            console.log(resp);
            this.workout_list = resp['workouts'];
            this.calendar_list = this.decodeCalendarData(resp['calendar']);
            const length = this.calendar_list.length;
            if (length < 1) {
              this.calendar_list.push([null, null, null, null, null, null, null]);
            }
            if (resp != null && resp['success'] != null) {
                console.log('success');
            }
            if (this.workout_list.length > 0) {
              let workout = null;
              if (this.loaded_workout != null && this.loaded_workout < this.workout_list.length) {
                workout = this.workout_list[this.loaded_workout];
              } else {
                workout = this.workout_list[0];
                this.loaded_workout = 0;
              }

              this.messageService.sendMessage('changeWorkout',
                JSON.stringify({workoutId: workout.id, workoutNumber: this.loaded_workout + 1}));
            }
          });
    }
    encodeCalendarData(calendarList) {
      const _calendar_list = [];
      calendarList.forEach(row => {
        const _week = [];
        row.forEach(day => {
          if (day === null) {
            _week.push(null);
          } else {
            _week.push(this.workout_list[day - 1].id);
          }
        });
        _calendar_list.push(_week);
      });
      return _calendar_list;
    }
    decodeCalendarData(calendarList) {
      const _calendar_list = [];
      calendarList.forEach(row => {
        const _week = [];
        row.forEach(day => {
          if (day === null) {
            _week.push(null);
          } else {
            let pushed = false;
            for (let i = 0; i < this.workout_list.length; i++) {
              if (this.workout_list[i].id === day) {
                _week.push(i + 1);
                pushed = true;
                break;
              }
            }
            if (pushed === false) {
              _week.push(null);
            }
          }
        });
        _calendar_list.push(_week);
      });
      return _calendar_list;
    }
    onSaveProgram(program) {
        if (program.name === '') {
            this.swal({
                title: 'Program is not completed!',
                text: 'Program name is empty.',
                icon: 'error',
                buttons: {
                    confirm : {text: 'OK', className: 'btn-yellow-gradient'}
                }
              });
            return;
        } else if (program.category === '') {
            this.swal({
                title: 'Program is not completed!',
                text: 'Program category is empty',
                icon: 'error',
                buttons: {
                    confirm : { text: 'OK', className: 'btn-yellow-gradient' }
                }
              });
            return;
        } else if (program.split === '') {
            this.swal({
                title: 'Program is not completed!',
                text: 'Program split is empty',
                icon: 'error',
                buttons: {
                    confirm : { text: 'OK', className: 'btn-yellow-gradient' }
                }
              });
            return;
        }
        this.spinner.show();
        this.http.post('program/restapi?info=save-program', {calendar : this.encodeCalendarData(this.calendar_list), program : program}, {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          }).subscribe(resp => {
            console.log(resp);
            this.spinner.hide();
            this.swal({
                title: 'Save completed!',
                text: 'Program was saved successfully.',
                icon: 'success',
                buttons: {
                    confirm : { text: 'OK', className: 'btn-yellow-gradient' }
                }
              });
            if (resp != null && resp['success'] != null) {
                console.log('success');
            }
          });
    }
}
