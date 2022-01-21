import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import * as moment from 'moment';
import { StoreService } from '../../../store/store.service';

@Component({
  selector: 'osg-strength-athlete-performance-comparison',
  templateUrl: './performance-comparison.component.html'
})
export class StrengthAthletePerformanceComparisonComponent implements OnInit{

  @Input() comparison: any;

  constructor(private dataService: DataService, private store: StoreService) { }

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }

  ngOnInit(): void {
    console.log(">>> performance-comparison component init")
    console.log(">>> this.dataService.from_other_profile: ", this.dataService.from_other_profile)

    if (!this.dataService.from_other_profile) {
      setTimeout(() => {
        if (this.required_preinterview || this.required_postinterview)
          document.getElementById("training-calendar").scrollIntoView();
      }, 2000);
    }
  }
}
