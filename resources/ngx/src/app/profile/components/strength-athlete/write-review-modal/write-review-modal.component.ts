import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'osg-strength-athlete-write-review-modal',
  templateUrl: './write-review-modal.component.html',
})

export class StrengthAthleteWriteReviewModalComponent {
  program_id: number;
  program_name: string;
  content: string;
  rate: number;

  // @Output() complete: EventEmitter<any> = new EventEmitter();
  complete: EventEmitter<any> = new EventEmitter();

  rate_value = [
    'zero', 'worst', 'worse', 'middle', 'good', 'excellent'
  ];

  onClose: EventEmitter<any> = new EventEmitter();
  onComplete: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly bsModalRef: BsModalRef,
    private dataService: DataService,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) { }

  async ngOnInit() {
  }

  onWriteReview() {
    this.http.post('program/restapi?info=write-review', {
      score: this.rate,
      content: this.content,
      program_id: this.program_id
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
    .subscribe(resp => {
      // this.onComplete.emit({ score: this.rate, content: this.content });
      // this.complete.emit({ score: this.rate, content: this.content });

      this.onClose.emit({ score: this.rate, content: this.content });
      this.bsModalRef.hide();
    });
  }

  close(): void {
    this.onClose.emit(null);
    this.bsModalRef.hide();
  }

}
