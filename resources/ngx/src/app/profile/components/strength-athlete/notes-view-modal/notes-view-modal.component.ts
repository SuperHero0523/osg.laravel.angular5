import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'osg-strength-athlete-notes-view-modal',
  templateUrl: './notes-view-modal.component.html',
})

export class StrengthAthleteNotesViewModalComponent {

  workout_date: any
  notes: string

  onClose: EventEmitter<any> = new EventEmitter();

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
