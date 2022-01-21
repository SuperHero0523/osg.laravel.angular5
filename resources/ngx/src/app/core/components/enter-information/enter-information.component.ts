
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AGE_MIN_MAXS, HEIGHT_MIN_MAXS, WEIGHT_MIN_MAXS_MALE, WEIGHT_MIN_MAXS_FEMALE, WHR_MIN_MAXS_MALE, WHR_MIN_MAXS_FEMALE } from 'src/app/constants';
import { MessageService } from '../../services/data.service';
import { MESSAGE_EXPBANK_SETINFO, MESSAGE_STRENGTH_STANDARD_SETINFO } from '../../../message.info';
import { ENTER_INFO_STATUS_EXPBANK, ENTER_INFO_STATUS_STRENSTAND } from 'src/app/constants';
import { ApplicationService } from '../../services/application.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'osg-enter-information',
  templateUrl: './enter-information.component.html'
})
export class EnterInformation implements OnInit{
  @Input() status: string;

  experienceBankPageStatus = ENTER_INFO_STATUS_EXPBANK;

  information: StrengthStandardInformation = {
    gender: 'Male',
    genderChecked: false,

    weightChecked: false,
    ageChecked: false,
    heightChecked: false,
    waistHipRatioChecked: false,
    muscleTypeChecked: false,

    level: 'Untrained',
    levelChecked: false,
  };

  genderOptions: string[] = ['Male', 'Female'];
  weightOptions: string[];
  waistHipRatioOptions: string[];
  ageOptions: string[];
  strengthLevelsOptions: string[];
  heightOptions: string[];
  muscleTypeOptions: string[];
  type: string = 'level';

  result: string = '';

  enterInfoStatusExperience = ENTER_INFO_STATUS_EXPBANK;
  enterInfoStatusStrenStand = ENTER_INFO_STATUS_STRENSTAND;

  applicationUser: any

  onGenderChange(){
    this.weightOptions = this.getBodyWeightOptions();
    this.waistHipRatioOptions = this.getWaistToHipRatioOptions();
    this.ageOptions = this.getAgeOptions();
    this.strengthLevelsOptions = this.getStrengthLevelsOptions();
    this.heightOptions = this.getHeightOptions();
    this.muscleTypeOptions = this.getMuscleFiberOptions();

    this.information.weight = this.weightOptions[0];
    this.information.waistHipRatio = this.waistHipRatioOptions[0];
    this.information.age = this.ageOptions[0];
    this.information.level = this.strengthLevelsOptions[0];
    this.information.height = this.heightOptions[0];
    this.information.muscleType = this.muscleTypeOptions[0];

  }

  changeResult() {

  }

  getBodyWeightOptions(): string[]{
    return this.information.gender === 'Male'
      ? ['50-59', '60-69', '70-79', '80-89', '90-99', '100-109', '110-119', '120+']
      : ['40-49', '50-59', '60-69', '70-79', '80-89', '90-99', '100-109', '110+'];
  }

  getWaistToHipRatioOptions(): string[]{
    return this.information.gender === 'Male'
      ? ['0,71-0,80','0.81-0,90', '0,91-1,00', '1,01-1,10', '1,11-1,20']
      : ['0,61-0,70', '0,71-0,80', '0.81-0,90', '0,91-1,00', '1,01-1,10'];
  }

  getAgeOptions(): string[]{
    return ['0-20', '21-30', '31-40', '41-50', '51-60', '61-80'];
  }

  getStrengthLevelsOptions(): string[]{
    return ['All', 'Untrained', 'Novice', 'Intermediate', 'Advanced', 'Elite'];
  }

  getHeightOptions(): string[]{
    return ['0-139', '140-149', '150-159', '160-169', '170-179', '180-189', '190-199', '200-209', '210-219', '220+'];
  }

  getMuscleFiberOptions(): string[]{
    return this.information.gender === 'Male'
      ? ['Slow twitch','Fast twitch', 'Fast and slow twitch']
      : ['Slow twitch','Fast twitch', 'Fast and slow twitch'];
  }

  constructor(private messageService: MessageService,
    private readonly applicationService: ApplicationService,
    private http: HttpClient,
  ) {
  }

  async ngOnInit() {
    this.applicationUser = await this.applicationService.getAuthenticatedUser().toPromise();

    this.onGenderChange();
    if (this.status == ENTER_INFO_STATUS_STRENSTAND) {
      this.information.genderChecked = true;
      this.information.weightChecked = true;
    }



  // weight?: string;
  // height?: string;
  // waistHipRatio?: string;
  // age?: string;
  // muscleType?: string;
  // level?: string;

    // prefill the values for strength athletes
    if (this.applicationUser.role == "StrengthAthlete") {
      const profile = this.applicationUser.profile;
      if (profile.gender == "male")
        this.information.gender = "Male";
      else
        this.information.gender = "Female";

      // get height
      this.information.height = profile.height;

      // get age
      const birthYear = parseInt(profile.birth.split('/')[2]);
      const curYear = new Date().getFullYear();
      const age = curYear - birthYear;
      console.log('-------- age: ', age);
      if (age > 60)
        this.information.age = this.ageOptions[5];
      else if (age > 50)
        this.information.age = this.ageOptions[4];
      else if (age > 40)
        this.information.age = this.ageOptions[3];
      else if (age > 30)
        this.information.age = this.ageOptions[2];
      else if (age > 20)
        this.information.age = this.ageOptions[1];
      else
        this.information.age = this.ageOptions[0];

      // get muscle type
      if (profile.muscle_type == "slow")
        this.information.muscleType = this.muscleTypeOptions[0];
      else if (profile.muscle_type == "fast")
        this.information.muscleType = this.muscleTypeOptions[1];
      else
        this.information.muscleType = this.muscleTypeOptions[2];

      // checked
      this.information.genderChecked = true;
      this.information.heightChecked = true;
      this.information.ageChecked = true;
      this.information.muscleTypeChecked = true;

      // get body weight, waist_to_hip, level from latest perform result
      this.http.get("/strengthstandard/getLatestPerformResult").subscribe((resp: any) => {
        console.log('------- get latest perform result response: ', resp)

        const result = resp.result;

        if (result.weight == undefined) return;

        // get body weight
        const weight = parseInt(resp.result.weight);
        if (this.information.gender == 'Male') {
          if (weight >= 120)
            this.information.weight = this.weightOptions[7];
          else if (weight >= 110)
            this.information.weight = this.weightOptions[6];
          else if (weight >= 100)
            this.information.weight = this.weightOptions[5];
          else if (weight >= 90)
            this.information.weight = this.weightOptions[4];
          else if (weight >= 80)
            this.information.weight = this.weightOptions[3];
          else if (weight >= 70)
            this.information.weight = this.weightOptions[2];
          else if (weight >= 60)
            this.information.weight = this.weightOptions[1];
          else
            this.information.weight = this.weightOptions[0];

        } else {
          if (weight >= 110)
            this.information.weight = this.weightOptions[7];
          else if (weight >= 100)
            this.information.weight = this.weightOptions[6];
          else if (weight >= 90)
            this.information.weight = this.weightOptions[5];
          else if (weight >= 80)
            this.information.weight = this.weightOptions[4];
          else if (weight >= 70)
            this.information.weight = this.weightOptions[3];
          else if (weight >= 60)
            this.information.weight = this.weightOptions[2];
          else if (weight >= 50)
            this.information.weight = this.weightOptions[1];
          else
            this.information.weight = this.weightOptions[0];
        }

        // get waist to hip
        const waist = resp.result.waist_hip_ratio;
        if (this.information.gender == 'Male') {
          if (waist > 1.10)
            this.information.waistHipRatio = this.waistHipRatioOptions[4];
          else if (waist > 1.00)
            this.information.waistHipRatio = this.waistHipRatioOptions[3];
          else if (waist > 0.90)
            this.information.waistHipRatio = this.waistHipRatioOptions[2];
          else if (waist > 0.80)
            this.information.waistHipRatio = this.waistHipRatioOptions[1];
          else if (waist > 0.70)
            this.information.waistHipRatio = this.waistHipRatioOptions[0];

        } else {
          if (waist > 1.00)
            this.information.waistHipRatio = this.waistHipRatioOptions[4];
          else if (waist > 0.90)
            this.information.waistHipRatio = this.waistHipRatioOptions[3];
          else if (waist > 0.80)
            this.information.waistHipRatio = this.waistHipRatioOptions[2];
          else if (waist > 0.70)
            this.information.waistHipRatio = this.waistHipRatioOptions[1];
          else if (waist > 0.60)
            this.information.waistHipRatio = this.waistHipRatioOptions[0];
        }

        // get level
        if (resp.result.level != undefined)
          this.information.level = resp.result.level;

        this.information.weightChecked = true;
        this.information.waistHipRatioChecked = true;
        this.information.levelChecked = true;
      })

      console.log('-------- this.informaiton: ', this.information)
    }
    this.onDone();
  }

  onDone(): void {
    console.log('>>> on done: ', this.information);

    let info = this.information;

    // get result string
    let result = ""
    if (info.genderChecked) {
      result = info.gender;
    }

    if (info.weightChecked) {
      result += result == "" ? "" : ", ";
      result += "Body Weight";
    }

    if (info.heightChecked) {
      result += result == "" ? "" : ", ";
      result += "Height";
    }

    if (info.waistHipRatioChecked) {
      result += result == "" ? "" : ", ";
      result += "Waist Hip Ratio";
    }

    if (info.ageChecked) {
      result += result == "" ? "" : ", ";
      result += "Age";
    }

    if (info.muscleTypeChecked) {
      result += result == "" ? "" : ", ";
      result += "Muscle Fiber Type";
    }

    if (info.levelChecked) {
      result += result == "" ? "" : ", ";
      result += "Level";
    }

    this.result = result;

    // get filter object
    let filter: any = {}
    if (info.genderChecked) {
      filter.gender = info.gender.toLowerCase();
    }

    if (info.weightChecked) {
      if (info.weight.includes("+")) {
        filter.weight_min = parseInt(info.weight.substr(0, info.weight.length - 1));
        filter.weight_max = 200;

      } else {
        filter.weight_min = parseInt(info.weight.split("-")[0]);
        filter.weight_max = parseInt(info.weight.split("-")[1]);
      }
    }

    if (info.heightChecked) {
      if (info.height.includes("+")) {
        filter.height_min = parseInt(info.height.substr(0, info.height.length - 1));
        filter.height_max = 300;

      } else {
        filter.height_min = parseInt(info.height.split("-")[0]);
        filter.height_max = parseInt(info.height.split("-")[1]);
      }
    }

    if (info.waistHipRatioChecked) {
        filter.waist_hip_ratio_min = parseFloat(info.waistHipRatio.split("-")[0].replace(",", "."));
        filter.waist_hip_ratio_max = parseFloat(info.waistHipRatio.split("-")[1].replace(",", "."));
    }

    if (info.ageChecked) {
      filter.age_min = parseInt(info.age.split("-")[0]);
      filter.age_max = parseInt(info.age.split("-")[1]);
    }

    if (info.muscleTypeChecked) {
      switch (info.muscleType) {
        case "Slow twitch":
          filter.muscle_type = "slow";
          break;
        case "Fast twitch":
          filter.muscle_type = "fase";
          break;
        case "Fast and slow twitch":
          filter.muscle_type = "mixed";
          break;
      }
    }

    if (info.levelChecked)
      filter.level = info.level;

    if (this.status == ENTER_INFO_STATUS_EXPBANK)
      this.messageService.sendMessage(MESSAGE_EXPBANK_SETINFO, JSON.stringify(filter));
    else
      this.messageService.sendMessage(MESSAGE_STRENGTH_STANDARD_SETINFO, JSON.stringify(filter));
  }
}

export interface StrengthStandardInformation{
  gender: string;
  genderChecked: boolean;

  weight?: string;
  weightChecked: boolean;

  height?: string;
  heightChecked: boolean;

  waistHipRatio?: string;
  waistHipRatioChecked: boolean;

  age?: string;
  ageChecked: boolean;

  muscleType?: string;
  muscleTypeChecked: boolean;

  level?: string;
  levelChecked: boolean;
}
