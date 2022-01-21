import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { HttpClient } from '@angular/common/http';
import { NgStyle } from '@angular/common';
import { PUBLIC_BODYPARTS } from '../../../constants';

@Component({
  selector: 'osg-strength-athlete-top-program-designs',
  templateUrl: './top-program-designs.component.html'
})
export class StrengthAthleteTopProgramDesignsComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;

  selLevel: string = "All";
  selCategory: string = "All";

  bodyparts = PUBLIC_BODYPARTS;
  topPrograms = {};
  isEmptyPrograms = true;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    console.log(">>> top-program-designs component init")

    this.getTopPrograms();
  }

  getTopPrograms() {
    let level = this.selLevel == 'All' ? '' : this.selLevel;
    let category = this.selCategory == 'All' ? '' : this.selCategory.toLowerCase();
    let url = 'profile/getTopPrograms?level=' + level + '&category=' + category;
    this.http.get(url).subscribe((resp:any) => {
      console.log(">>> get top programs: ", resp);

      this.isEmptyPrograms = true;
      PUBLIC_BODYPARTS.forEach(bodypart => {
        this.topPrograms[bodypart] = resp.result[bodypart];
        if (resp.result[bodypart] != undefined)
          this.isEmptyPrograms = false;
      })
    })
  }

  onChangeLevel(level) {
    this.selLevel = level;
    this.getTopPrograms();
  }

  onChangeCategory(category) {
    this.selCategory = category;
    this.getTopPrograms();
  }

}
