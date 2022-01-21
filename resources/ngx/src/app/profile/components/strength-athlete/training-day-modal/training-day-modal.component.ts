import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'osg-strength-athlete-training-day-modal',
  templateUrl: './training-day-modal.component.html',
})

export class StrengthAthleteTrainingDayModalComponent {

  data: any
  synthe_data: any
  date_string: String

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

  constructor(
    private readonly bsModalRef: BsModalRef,
    private dataService: DataService
  ) { }

  async ngOnInit() {

  }


  close(): void {
    this.onClose.emit(null);
    this.bsModalRef.hide();
  }

}
