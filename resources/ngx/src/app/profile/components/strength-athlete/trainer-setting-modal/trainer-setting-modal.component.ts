import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../../../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'osg-strength-athlete-trainer-setting-modal',
  template: `
  <div class="modal-header">
    <h4 class="modal-title pull-left">Personal Trainer</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="close()">
        <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <button class="btn btn-border dropdown-toggle btn-block" type="button" id="dropdownMenuButton"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background: rgb(181, 239, 255);">
      {{ trainers != undefined && trainers.length ? trainers[cur_index].name : ''}}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width:90%">
      <a *ngFor="let trainer of trainers; let i = index" class="dropdown-item" (click)="cur_index=i">{{trainer.name}}</a>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn" (click)="setTrainer()" style="background-image: linear-gradient(to bottom right, #8dcc3e, #67a815); font-weight: bold; border-radius: 2px; text-transform: uppercase; font-size: 12px; padding: 8px 13px; border: none;">Add Personal Trainer</button>
  </div>`,
  styles: [
    '.modal-content {max-width: 250px; top: 250px !important; padding: 10px 20px !important; border: 3px solid; border-radius: 10px;}',
    '.modal-content .modal-header {border: none; padding: 0; height: 35px;}',
    '.modal-content .modal-header h4 {font-family:Gotham Medium; font-size: 17px; color: #000; margin:0}',
    '.modal-content .modal-body {padding: 10px 0px;}',
    '.modal-content .modal-body .dropdown-menu.show {width: 90%;}',
    '.modal-content .modal-body button {margin-left: 1.255em}',
    '.modal-content .modal-footer {justify-content: flex-start; border: none; padding: 0;}',
    '.modal-content .modal-footer button {background: #fff; border: 1px solid #666; padding: 10px;}',
    '.modal-content .modal-footer .btn {background-image: linear-gradient(to bottom right, #8dcc3e, #67a815); font-weight: bold; border-radius: 2px; text-transform: uppercase; font-size: 12px; padding: 8px 13px; border: none;}'
  ]
})

export class StrengthAthleteTrainerSettingModalComponent implements OnInit {

  calendar_id: any;
  cur_index: number = -1;
  trainers: any;

  // @Output() onClose: EventEmitter<any> = new EventEmitter();
  onClose: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly bsModalRef: BsModalRef,
    private dataService: DataService,
    private http: HttpClient
  ) { }

  async ngOnInit() {
    this.http.get('/profile/getTrainers').subscribe((resp: any) => {
      this.trainers = resp.trainers;
      if (resp.trainers.length)
        this.cur_index = 0;
    })
  }

  setTrainer() {
    let body = {
      calendar_id: this.calendar_id,
      trainer: this.trainers[this.cur_index].id
    }
    this.http.post('/profile/setTrainer', body).subscribe((resp: any) => {
      if (!resp.success) {
        console.log('>>> set trainer api calling failed');
        return;
      }

      this.onClose.emit(this.trainers[this.cur_index].name);
      this.bsModalRef.hide();
    })
  }

  close(): void {
    this.onClose.emit(null);
    this.bsModalRef.hide();
  }

}
