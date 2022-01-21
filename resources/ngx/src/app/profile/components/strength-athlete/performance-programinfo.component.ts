import { Component, OnInit, Input } from '@angular/core';
import { StrengthAthleteTrainerSettingModalComponent } from './trainer-setting-modal/trainer-setting-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from '../../../core/services/data.service';
import { Subscription } from 'rxjs';
import { TRAINER_CHANGED } from '../../../message.info';
import { HttpClient } from '@angular/common/http';
import { StoreService } from '../../../store/store.service';
import { DataService } from '../../../data.service';

@Component({
  selector: 'osg-strength-athlete-performance-programinfo',
  templateUrl: './performance-programinfo.component.html'
})
export class StrengthAthletePerformancePrograminfoComponent implements OnInit{

  @Input() info: any;

  subscription: Subscription;

  bsModalRef: BsModalRef;

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  constructor(private modalService: BsModalService,
    private messageService: MessageService,
    private http: HttpClient,
    private store: StoreService,
    private dataService: DataService,
  ) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message.info === TRAINER_CHANGED) {
        console.log('>>>> info: ', this.info);
        let change = JSON.parse(message.text);
        if (change.calendar_id == this.info.calendar_id) {
          this.info.trainer_name = change.trainer_name;
        }
      }
    });
  }


  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }

  ngOnInit(): void {
    console.log(">>> performance-result component init")
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickAddPT() {
    console.log('>>> on click add pt: ', this.info);
    const initialState = {
      calendar_id: this.info.calendar_id,
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
        this.info.trainer_name = result;
        for (let log of this.calendar_workout_logs) {
          if (log.id == this.info.calendar_id) {
            log.trainer_name = result;
            break;
          }
        }

        let change = {
          calendar_id: this.info.calendar_id,
          trainer_name: result
        }

        this.messageService.sendMessage(TRAINER_CHANGED, JSON.stringify(change));
      }
    })
  }

  onClickRemovePT() {
    this.http.post('/profile/removeTrainer', { calendar_id: this.info.calendar_id }).subscribe((resp: any) => {
      if (resp.success) {

        this.info.trainer_name = null;

        for (let log of this.calendar_workout_logs) {
          if (log.id == this.info.calendar_id) {
            log.trainer_name = null;
            break;
          }
        }

        let change = {
          calendar_id: this.info.calendar_id,
          trainer_name: null
        }

        this.messageService.sendMessage(TRAINER_CHANGED, JSON.stringify(change));
      }
    })
  }

  onClosePTModal(trainer_name) {
    if (trainer_name != null)
      this.info.trainer_name = trainer_name;
  }
}
