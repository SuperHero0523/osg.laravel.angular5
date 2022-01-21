import { Component, OnInit, Input } from '@angular/core';
import { StrengthAthleteTrainerSettingModalComponent } from './trainer-setting-modal/trainer-setting-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'osg-strength-athlete-performance-tests',
  templateUrl: './performance-tests.component.html'
})
export class StrengthAthletePerformanceTestsComponent implements OnInit{

  @Input() test: any;

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    console.log(">>> performance-tests component init")

  }
}
