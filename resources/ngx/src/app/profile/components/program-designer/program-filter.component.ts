import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { DataService } from '../../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../core/services/data.service';
import { MESSAGE_DESIGNER_PROFILE_EXPBANK } from '../../../message.info';
import $ from 'jquery';
import { NO_RM_EQUIPMENTS } from '../../../constants';

@Component({
  selector: 'osg-program-designer-program-filter',
  templateUrl: './program-filter.component.html'
})
export class ProgramDesignerProgramFilterComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;

  isLoading = true;
  currentProgram: any = { name: '', category: '', split: '', description: '', is_saved: -1 };

  designer_user_id = 0;

  get data() {
    return this.dataService.sharedData;
  }
  set data(val) {
    this.dataService.sharedData = val;
  }

  get weeks() {
    return this.dataService.weeks;
  }
  set weeks(val) {
    this.dataService.weeks = val;
  }

  get plans() {
    return this.dataService.plans;
  }
  set plans(val) {
    this.dataService.plans = val;
  }

  get workouts() {
    return this.dataService.workouts;
  }
  set workouts(val) {
    this.dataService.workouts = val;
  }

  get design_data() {
    return this.dataService.design_data;
  }
  set design_data(val) {
    this.dataService.design_data = val;
  }

  get first_program() {
    return this.dataService.first_program;
  }
  set first_program(val) {
    this.dataService.first_program = val;
    this.dataService.first_program_subject.next("filter");
  }
  get first_program_change() {
    return this.dataService.first_program_change$;
  }

  get published_programs() {
    return this.dataService.published_programs;
  }
  get published_programs_change() {
    return this.dataService.published_programs_change$;
  }

  get reviews() {
    return this.dataService.reviews;
  }
  set reviews(val) {
    this.dataService.reviews = val;
  }

  bodyWeightsForMale    = ['0-49', '50-59', '60-69', '70-79', '80-89', '90-99', '100-109', '110-119', '120+'];
  bodyWeightsForFemale = ['0-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-99', '100-109', '110+'];
  bodyWeightForMaleSelIndex = 0;
  bodyWeightForFemaleSelIndex = 0;
  bodyWeightForMaleChecked = false;
  bodyWeightForFemaleChecked = false;

  waistToHipRatiosForMale   = ['0-0,70', '0,71-0,80', '0,81-0,90', '0,91-1,00', '1,01-1,10', '1,11-1,20'];
  waistToHipRatiosForFemale = ['0-0,60', '0,61-0,70', '0,71-0,80', '0.81-0,90', '0,91-1,00', '1,01-1,10'];
  waistToHipRatioForMaleSelIndex = 0;
  waistToHipRatioForFemaleSelIndex = 0;
  waistToHipRatioForMaleChecked = false;
  waistToHipRatioForFemaleChecked = false;

  ages = ['0-20', '21-30', '31-40', '41-50', '51-60', '61-80'];
  ageForMaleSelIndex = 0;
  ageForFemaleSelIndex = 0;
  ageForMaleChecked = false;
  ageForFemaleChecked = false;

  strengthLevels = ['Untrained', 'Novice', 'Intermediate', 'Advanced', 'Elite'];
  strengthLevelForMaleSelIndex = 0;
  strengthLevelForFemaleSelIndex = 0;
  strengthLevelForMaleChecked = false;
  strengthLevelForFemaleChecked = false;

  heights = ['0-139', '140-149', '150-159', '160-169', '170-179', '180-189', '190-199', '200-209', '210-219', '220+'];
  heightForMaleSelIndex = 0;
  heightForFemaleSelIndex = 0;
  heightForMaleChecked = false;
  heightForFemaleChecked = false;

  muscleFibers = ['Slow twitch', 'Fast twitch', 'Fast and slow twitch'];
  muscleFiberForMaleSelIndex = 0;
  muscleFiberForFemaleSelIndex = 0;
  muscleFiberForMaleChecked = false;
  muscleFiberForFemaleChecked = false;

  constructor(private spinner: NgxSpinnerService,
    private http: HttpClient,
    private dataService: DataService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

      this.first_program_change.subscribe((change) => {
        if (change == 'filter') return;

        this.spinner.show();

        console.log('>>> first program changed(program filter) ', this.first_program, change);
        this.resetConditions();
        this.currentProgram = this.first_program;

        let params = this.configureSortParams();
        this.messageService.sendMessage(MESSAGE_DESIGNER_PROFILE_EXPBANK, JSON.stringify(params));
        if (this.first_program == undefined || this.first_program.id == undefined) {
          this.weeks = [];
          this.plans = [];
          this.workouts = [];
          this.data = [];
          this.reviews = [];

          this.dataService.calculateStatistics();
          this.dataService.calculateOverloadGraphData();
          this.dataService.getProgressionModels();
          this.isLoading = false;
          this.spinner.hide();

        } else {
          this.loadCalendarData(this.first_program.id);
          this.loadReviews(this.first_program.id);
        }
      })
    }

  getStartedSections = ["calendar builder guide", "progression model guide", "about auto-regulation", "experience bank guide"];
  current_set: string;

  ngOnInit(): void {
    this.current_set = "profile";
    var isInitial = true;
    if (!this.data.length) {
      this.published_programs_change.subscribe(async (change) => {
        console.log('--- published programs: ', this.published_programs);
        if (isInitial) {

          if (this.published_programs.length)
            this.spinner.show();

          let program_id = this.published_programs[0] ? this.published_programs[0].id : -1;

          console.log('----- program id: ', program_id);

          let param = this.activatedRoute.snapshot.params.handle;
          if (param != undefined) {  // get the sort values from the current athlete user
            this.designer_user_id = param.split('?')[0];
            console.log('---- program filer / designer user id: ', this.designer_user_id);
            let cur_url = this.router.url;

            console.log('---- router url: ', cur_url);
            if (cur_url.includes("program")) {
              cur_url = decodeURIComponent(cur_url);

              console.log('---- decodeURIComponent router url: ', decodeURIComponent(cur_url));
              const programName = cur_url.split('=')[1].replace('%20', ' ');
              console.log('---- program name: ', programName);

              const self = this;
              if (this.published_programs.length) {
                this.published_programs.forEach(program => {
                  if (program.name == programName) {
                    program_id = program.id;
                    self.first_program = program;
                    self.currentProgram = program;
                  }
                });
              }

            } else {
              // get data to fill from backend
              await new Promise((resolve) => {
                this.http.get('/profile/getSortValuesForAthlete').subscribe((rs: any) => {
                  if (rs.success == false) {
                    console.log('>>> get sort values for athlete failed');
                    return;
                  }
                  console.log('>>> profile/getSortValuesForAthlete: ', rs);

                  if (rs.result.program_id > 0) {
                    this.prefillSortValue(rs.result);
                    this.published_programs.forEach(program => {
                      if (program.id == rs.result.program_id) {
                        program_id = rs.result.program_id;
                      }
                    });
                  }

                  resolve(0);
                  console.log('>>> after resolve');
                });
              })
            }

          } else { // get the sort values from the current designer user

            await new Promise((resolve) => {
              this.http.get('/profile/getSortValuesForDesigner').subscribe((rs: any) => {
                if (rs.success == false) {
                  console.log('>>> get sort values for athlete failed');
                  return;
                }
                console.log('>>> profile/getSortValuesForDesigner: ', rs);

                if (rs.result.program_id > 0) {
                  this.prefillSortValue(rs.result);
                  this.published_programs.forEach(program => {
                    if (program.id == rs.result.program_id) {
                      program_id = rs.result.program_id;
                    }
                  });
                }

                resolve(0);
                console.log('>>> after resolve');
              });
            })
          }

          isInitial = false;
          console.log('>>> program id: ', program_id);

          if (this.first_program.id == undefined) {
            this.first_program = this.published_programs.length ? this.published_programs[0] : {}
            this.currentProgram = this.published_programs.length ? this.published_programs[0] : {}
          }

          if (this.first_program.id != undefined)
            program_id = this.first_program.id;

          console.log('>>> program id: ', program_id);

          this.onShowResult();
          this.loadCalendarData(program_id);
          this.loadReviews(program_id);
          this.isLoading = true;
        }
      })
    }
  }

  setBodyWeightForMaleChecked = (checked) => {
    this.bodyWeightForMaleChecked = checked;
  }

  setBodyWeightForFemaleChecked = (checked) => {
    this.bodyWeightForFemaleChecked = checked;
  }

  setStrengthLevelForMaleChecked = (checked) => {
    this.strengthLevelForMaleChecked = checked;
  }

  setStrengthLevelForFemaleChecked = (checked) => {
    this.strengthLevelForFemaleChecked = checked;
  }

  setWaistToHipRatioForMaleChecked = (checked) => {
    this.waistToHipRatioForMaleChecked = checked;
  }

  setWaistToHipRatioForFemaleChecked = (checked) => {
    this.waistToHipRatioForFemaleChecked = checked;
  }

  setHeightForMaleChecked = (checked) => {
    this.heightForMaleChecked = checked;
  }

  setHeightForFemaleChecked = (checked) => {
    this.heightForFemaleChecked = checked;
  }

  setAgeForMaleChekced = (checked) => {
    this.ageForMaleChecked = checked;
  }

  setAgeForFemaleChecked = (checked) => {
    this.ageForFemaleChecked = checked;
  }

  setMuscleFiberForMaleChecked = (checked) => {
    this.muscleFiberForMaleChecked = checked;
  }

  setMuscleFiberForFemaleChecked = (checked) => {
    this.muscleFiberForFemaleChecked = checked;
  }

  prefillSortValue = (data) => {
    if (data.program_id > 0) {

      // firstly set the selected program
      let index = this.published_programs.findIndex(program => program.id == data.program_id)
      if (index != -1) {
        this.first_program = this.published_programs[index];
        this.currentProgram = this.published_programs[index];
      }

      // fill the data
      if (data.gender == 'male') {

        // get body weight index
        if (data.bodyWeight >= 120) this.bodyWeightForMaleSelIndex = 8;
        else if (110 <= data.bodyWeight && data.bodyWeight <= 119) this.bodyWeightForMaleSelIndex = 7;
        else if (100 <= data.bodyWeight && data.bodyWeight <= 109) this.bodyWeightForMaleSelIndex = 6;
        else if (90 <= data.bodyWeight && data.bodyWeight <= 99) this.bodyWeightForMaleSelIndex = 5;
        else if (80 <= data.bodyWeight && data.bodyWeight <= 89) this.bodyWeightForMaleSelIndex = 4;
        else if (70 <= data.bodyWeight && data.bodyWeight <= 79) this.bodyWeightForMaleSelIndex = 3;
        else if (60 <= data.bodyWeight && data.bodyWeight <= 69) this.bodyWeightForMaleSelIndex = 2;
        else if (50 <= data.bodyWeight && data.bodyWeight <= 59) this.bodyWeightForMaleSelIndex = 1;

        // get waist to hip ratio index
        if (data.waistToHipRatio >= 1.11) this.waistToHipRatioForMaleSelIndex = 5;
        else if (1.01 <= data.waistToHipRatio && data.waistToHipRatio <= 1.10) this.waistToHipRatioForMaleSelIndex = 4;
        else if (0.91 <= data.waistToHipRatio && data.waistToHipRatio <= 1.00) this.waistToHipRatioForMaleSelIndex = 3;
        else if (0.81 <= data.waistToHipRatio && data.waistToHipRatio <= 0.90) this.waistToHipRatioForMaleSelIndex = 2;
        else if (0.71 <= data.waistToHipRatio && data.waistToHipRatio <= 0.80) this.waistToHipRatioForMaleSelIndex = 1;

      } else {
        // get body weight index
        if (data.bodyWeight >= 110) this.bodyWeightForFemaleSelIndex = 8;
        else if (100 <= data.bodyWeight && data.bodyWeight <= 109) this.bodyWeightForFemaleSelIndex = 7;
        else if (90 <= data.bodyWeight && data.bodyWeight <= 99) this.bodyWeightForFemaleSelIndex = 6;
        else if (80 <= data.bodyWeight && data.bodyWeight <= 89) this.bodyWeightForFemaleSelIndex = 5;
        else if (70 <= data.bodyWeight && data.bodyWeight <= 79) this.bodyWeightForFemaleSelIndex = 4;
        else if (60 <= data.bodyWeight && data.bodyWeight <= 69) this.bodyWeightForFemaleSelIndex = 3;
        else if (50 <= data.bodyWeight && data.bodyWeight <= 59) this.bodyWeightForFemaleSelIndex = 2;
        else if (40 <= data.bodyWeight && data.bodyWeight <= 49) this.bodyWeightForFemaleSelIndex = 1;

        // get waist to hip ratio index
        if (data.waistToHipRatio >= 1.11) this.waistToHipRatioForFemaleSelIndex = 5;
        else if (1.01 <= data.waistToHipRatio && data.waistToHipRatio <= 1.10) this.waistToHipRatioForFemaleSelIndex = 4;
        else if (0.91 <= data.waistToHipRatio && data.waistToHipRatio <= 1.00) this.waistToHipRatioForFemaleSelIndex = 3;
        else if (0.81 <= data.waistToHipRatio && data.waistToHipRatio <= 0.90) this.waistToHipRatioForFemaleSelIndex = 2;
        else if (0.71 <= data.waistToHipRatio && data.waistToHipRatio <= 0.80) this.waistToHipRatioForFemaleSelIndex = 1;
      }

      // get strength level index
      index = this.strengthLevels.indexOf(data.strengthLevel);
      if (index >= 0) {
        if (data.gender == 'male')
          this.strengthLevelForMaleSelIndex = index;
        else
          this.strengthLevelForFemaleSelIndex = index;
      }
    }
    console.log('>>>> data: ', data);

    if (data.age != undefined) {
      // get age index
      if (data.age >= 61) {
        if (data.gender == 'male') this.ageForMaleSelIndex = 5; else this.ageForFemaleSelIndex = 5;
      } else if (51 <= data.age && data.age <= 60) {
        if (data.gender == 'male') this.ageForMaleSelIndex = 4; else this.ageForFemaleSelIndex = 4;
      } else if (41 <= data.age && data.age <= 50) {
        if (data.gender == 'male') this.ageForMaleSelIndex = 3; else this.ageForFemaleSelIndex = 3;
      } else if (31 <= data.age && data.age <= 40) {
        if (data.gender == 'male') this.ageForMaleSelIndex = 2; else this.ageForFemaleSelIndex = 2;
      } else if (21 <= data.age && data.age <= 30) {
        if (data.gender == 'male') this.ageForMaleSelIndex = 1; else this.ageForFemaleSelIndex = 1;
      }

      // get height index
      if (data.height >= 220) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 9; else this.heightForFemaleSelIndex = 9;
      } else if (210 <= data.height && data.height <= 219) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 8; else this.heightForFemaleSelIndex = 8;
      } else if (200 <= data.height && data.height <= 209) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 7; else this.heightForFemaleSelIndex = 7;
      } else if (190 <= data.height && data.height <= 199) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 6; else this.heightForFemaleSelIndex = 6;
      } else if (180 <= data.height && data.height <= 189) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 5; else this.heightForFemaleSelIndex = 5;
      } else if (170 <= data.height && data.height <= 179) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 4; else this.heightForFemaleSelIndex = 4;
      } else if (160 <= data.height && data.height <= 169) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 3; else this.heightForFemaleSelIndex = 3;
      } else if (150 <= data.height && data.height <= 159) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 2; else this.heightForFemaleSelIndex = 2;
      } else if (140 <= data.height && data.height <= 149) {
        if (data.gender == 'male') this.heightForMaleSelIndex = 1; else this.heightForFemaleSelIndex = 1;
      }

      // get muscle fiber index
      if ((data.muscleFiber as string).toLowerCase() == 'fast') {
        if (data.gender == 'male') this.muscleFiberForMaleSelIndex = 1; else this.muscleFiberForFemaleSelIndex = 1;
      } else if ((data.muscleFiber as string).toLowerCase() == 'slow and fast') {
        if (data.gender == 'male') this.muscleFiberForMaleSelIndex = 2; else this.muscleFiberForFemaleSelIndex = 2;
      }
    }
  }

  onClickBodyWeightForMale = (index) => {
    this.bodyWeightForMaleSelIndex = index;
  }

  onClickBodyWeightForFemale = (index) => {
    this.bodyWeightForFemaleSelIndex = index;
  }

  onClickWaistToHipRatiosForMale = (index) => {
    this.waistToHipRatioForMaleSelIndex = index;
  }

  onClickWaistToHipRatiosForFemale = (index) => {
    this.waistToHipRatioForFemaleSelIndex = index;
  }

  onClickAgeForMale = (index) => {
    this.ageForMaleSelIndex = index;
  }

  onClickAgeForFemale = (index) => {
    this.ageForFemaleSelIndex = index;
  }

  onClickStrengthLevelForMale = (index) => {
    this.strengthLevelForMaleSelIndex = index;
  }

  onClickStrengthLevelForFemale = (index) => {
    this.strengthLevelForFemaleSelIndex = index;
  }

  onClickHeightForMale = (index) => {
    this.heightForMaleSelIndex = index;
  }

  onClickHeightForFemale = (index) => {
    this.heightForFemaleSelIndex = index;
  }

  onClickMuscleFiberForMale = (index) => {
    this.muscleFiberForMaleSelIndex = index;
  }

  onClickMuscleFiberForFemale = (index) => {
    this.muscleFiberForFemaleSelIndex = index;
  }

  onSelected(program) {
    this.currentProgram = program;
  }

  resetConditions() {
    this.bodyWeightForMaleSelIndex = 0;
    this.bodyWeightForFemaleSelIndex = 0;
    if (this.bodyWeightForMaleChecked) {
      $('.checkmark:eq(0)').click();
    }
    if (this.bodyWeightForMaleChecked) {
      $('.checkmark:eq(6)').click();
    }
    this.bodyWeightForMaleChecked = false;
    this.bodyWeightForFemaleChecked = false;

    this.waistToHipRatioForMaleSelIndex = 0;
    this.waistToHipRatioForFemaleSelIndex = 0;
    if (this.waistToHipRatioForMaleChecked) {
      $('.checkmark:eq(2)').click();
    }
    if (this.waistToHipRatioForFemaleChecked) {
      $('.checkmark:eq(8)').click();
    }
    this.waistToHipRatioForMaleChecked = false;
    this.waistToHipRatioForFemaleChecked = false;

    this.ageForMaleSelIndex = 0;
    this.ageForFemaleSelIndex = 0;
    if (this.ageForMaleChecked) {
      $('.checkmark:eq(4)').click();
    }
    if (this.ageForFemaleChecked) {
      $('.checkmark:eq(10)').click();
    }
    this.ageForMaleChecked = false;
    this.ageForFemaleChecked = false;

    this.strengthLevelForMaleSelIndex = 0;
    this.strengthLevelForFemaleSelIndex = 0;
    if (this.strengthLevelForMaleChecked) {
      $('.checkmark:eq(1)').click();
    }
    if (this.strengthLevelForFemaleChecked) {
      $('.checkmark:eq(7)').click();
    }
    this.strengthLevelForMaleChecked = false;
    this.strengthLevelForFemaleChecked = false;

    this.heightForMaleSelIndex = 0;
    this.heightForFemaleSelIndex = 0;
    if (this.heightForMaleChecked) {
      $('.checkmark:eq(3)').click();
    }
    if (this.heightForFemaleChecked) {
      $('.checkmark:eq(9)').click();
    }
    this.heightForMaleChecked = false;
    this.heightForFemaleChecked = false;

    this.muscleFiberForMaleSelIndex = 0;
    this.muscleFiberForFemaleSelIndex = 0;
    if (this.muscleFiberForMaleChecked) {
      $('.checkmark:eq(5)').click();
    }
    if (this.muscleFiberForFemaleChecked) {
      $('.checkmark:eq(11)').click();
    }
    this.muscleFiberForMaleChecked = false;
    this.muscleFiberForFemaleChecked = false;
  }

  configureSortParams() {
    let params: any = {
      program_id: this.currentProgram == undefined ? -1 : this.currentProgram.id,
    }

    // Male Checking
    if (this.bodyWeightForMaleChecked) {
      params.min_body_weight_male = this.bodyWeightsForMale[this.bodyWeightForMaleSelIndex].split("-")[0];
      params.max_body_weight_male = this.bodyWeightsForMale[this.bodyWeightForMaleSelIndex].split("-")[1];
    }
    if (this.strengthLevelForMaleChecked) {
      params.strength_level_male = this.strengthLevels[this.strengthLevelForMaleSelIndex];
    }
    if (this.waistToHipRatioForMaleChecked) {
      params.min_waist_hip_ratio_male = this.waistToHipRatiosForMale[this.waistToHipRatioForMaleSelIndex].split("-")[0].replace(",", ".");
      params.max_waist_hip_ratio_male = this.waistToHipRatiosForMale[this.waistToHipRatioForMaleSelIndex].split("-")[1].replace(",", ".");
    }
    if (this.heightForMaleChecked) {
      params.min_height_male = this.heights[this.heightForMaleSelIndex].split("-")[0];
      params.max_height_male = this.heights[this.heightForMaleSelIndex].split("-")[1];
    }
    if (this.ageForMaleChecked) {
      params.min_age_male = this.ages[this.ageForMaleSelIndex].split("-")[0];
      params.max_age_male = this.ages[this.ageForMaleSelIndex].split("-")[1];
    }
    if (this.muscleFiberForMaleChecked) {
      params.muscle_male = this.muscleFibers[this.muscleFiberForMaleSelIndex].toLowerCase();
    }

    // Female Checking
    if (this.bodyWeightForFemaleChecked) {
      params.min_body_weight_female = this.bodyWeightsForFemale[this.bodyWeightForFemaleSelIndex].split("-")[0];
      params.max_body_weight_female = this.bodyWeightsForFemale[this.bodyWeightForFemaleSelIndex].split("-")[1];
    }
    if (this.strengthLevelForFemaleChecked) {
      params.strength_level_female = this.strengthLevels[this.strengthLevelForFemaleSelIndex];
    }
    if (this.waistToHipRatioForFemaleChecked) {
      params.min_waist_hip_ratio_female = this.waistToHipRatiosForFemale[this.waistToHipRatioForFemaleSelIndex].split("-")[0].replace(",", ".");
      params.max_waist_hip_ratio_female = this.waistToHipRatiosForFemale[this.waistToHipRatioForFemaleSelIndex].split("-")[1].replace(",", ".");
    }
    if (this.heightForFemaleChecked) {
      params.min_height_female = this.heights[this.heightForFemaleSelIndex].split("-")[0];
      params.max_height_female = this.heights[this.heightForFemaleSelIndex].split("-")[1];
    }
    if (this.ageForFemaleChecked) {
      params.min_age_female = this.ages[this.ageForFemaleSelIndex].split("-")[0];
      params.max_age_female = this.ages[this.ageForFemaleSelIndex].split("-")[1];
    }
    if (this.muscleFiberForFemaleChecked) {
      params.muscle_female = this.muscleFibers[this.muscleFiberForFemaleSelIndex].toLowerCase();
    }

    return params;
  }

  onShowResult() {
    let params = this.configureSortParams();
    this.messageService.sendMessage(MESSAGE_DESIGNER_PROFILE_EXPBANK, JSON.stringify(params));

    if (this.first_program != undefined && this.currentProgram != undefined && this.first_program.id != this.currentProgram.id) {
      this.spinner.show();
      this.first_program = this.currentProgram;
      this.loadCalendarData(this.first_program['id']);
      this.loadReviews(this.first_program['id']);
    }
  }

  loadReviews(program_id) {
    console.log('>>> filter load review: ', program_id);
    if (program_id == undefined || program_id == -1) {
      this.reviews = [];
      return;
    }

    this.http.post('program/restapi?info=read-reviews', {program_id: program_id, limit: 5}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
    .subscribe(resp => {
      console.log('read reviews = ', resp);
      this.reviews = resp['data'];
    });
  }

  loadCalendarData(program_id) {
    if (program_id == undefined || program_id == -1) {
      this.weeks = [];
      this.plans = [];
      this.workouts = [];
      this.data = [];

      this.dataService.calculateStatistics();
      this.dataService.calculateOverloadGraphData();
      this.dataService.getProgressionModels();
      this.isLoading = false;
      this.spinner.hide();
      return;
    }

    let url = '/progression/getProgressionCalendarData?program_id=' + program_id;

    if (this.designer_user_id > 0) {
      url += '&user_id=' + this.designer_user_id;
    }

    console.log(">>> get calendar data url: ", url);

    this.http.get(url)
      .subscribe(resp => {
        var temp = [];
        resp['weeks'].forEach(item => {
          let week = []
          let planArray = JSON.parse(item.data);
          for (let plan of planArray) {
            let day = {
              plan: plan
            }
            week.push(day);
          }

          temp.push(week);
        });
        this.weeks = temp;
        console.log('>>> ProgramDesignerProgramFilterComponent weeks = ', JSON.parse(JSON.stringify(this.weeks)));
        this.getPlan(program_id);
      });
  }

  getPlan(program_id) {
    let url = '/progression/getProgressionPlan?program_id=' + program_id;

    if (this.designer_user_id > 0) {
      url += '&user_id=' + this.designer_user_id;
    }

    this.http.get(url)
      .subscribe(resp => {
        this.plans = resp['data'];
        console.log('plans = ', resp['data']);
        this.getWorkouts(program_id);
      });
  }

  getWorkouts(program_id) {
    let url = '/progression/getProgressionWorkouts?program_id=' + program_id;

    if (this.designer_user_id > 0) {
      url += '&user_id=' + this.designer_user_id;
    }

    this.http.get(url)
      .subscribe(resp => {
        this.workouts = resp['data'];
        console.log('workouts = ', resp['data']);
        this.calculateData();
      });
  }

  calculateData() {
    var dataArray = [];

    console.log(">>> weeks in program filter: ", JSON.parse(JSON.stringify(this.weeks)));
    this.weeks.forEach(week => {
      var temp = [];
      week.forEach(day => {
        var tmpData = new Object();
        tmpData['day'] = day;
        tmpData['body_parts'] = [];


        /*********************** ********************/
        // must be considered this in future
        tmpData['total_body_parts'] = [];

        let prevBodyPart = '';
        let prevWorkout = 0;

        let isTestDay = false;
        this.workouts.forEach(workout => {
          const rm_show = NO_RM_EQUIPMENTS.findIndex(equipment => workout.equipment_name == equipment) == -1 ? true : false;
          if (!rm_show) workout.rm = 0;
          // const rm_show = workout.rm != 0 ? true : false;

          if (workout.plan == day.plan) {
            if (workout.method == 3) {
              isTestDay = true;
            }

            if (prevBodyPart == workout.bodypart_name) {
              const bodypart_len = tmpData['body_parts'].length;
              const body_part = tmpData['body_parts'][bodypart_len - 1];
              const exercise_len = body_part.exercises.length;

              if (exercise_len > 0 && body_part.exercises[exercise_len - 1].workout == workout.workout) {
                body_part.exercises[exercise_len - 1].data.push(workout);
                body_part.exercises[exercise_len - 1].row++;

              } else {
                body_part.exercises.push({
                  name: workout.name,
                  workout: workout.workout,
                  data: [workout],
                  exercise_code: workout.exercise,
                  equipment_name: workout.equpiment_name,
                  rm_show: rm_show,
                  row: 1
                });
              }

              body_part.row++;

              prevWorkout = workout.workout
            } else {
              tmpData['body_parts'].push({
                name: workout.bodypart_name,
                exercises: [{
                  name: workout.name,
                  workout: workout.workout,
                  data: [workout],
                  exercise_code: workout.exercise,
                  equipment_name: workout.equpiment_name,
                  rm_show: rm_show,
                  row: 1
                }],
                row: 1,
              });
            }
            prevBodyPart = workout.bodypart_name;

            // get total body parts
            var flg = false;
            tmpData['total_body_parts'].forEach(total_body_part => {
              if (total_body_part.name == workout.bodypart_name) {
                flg = true;
                total_body_part.totalReps += parseInt(workout.reps);
                total_body_part.totalRm += rm_show ? parseFloat(workout.rm) : 0;
                total_body_part.totalExercise += 1;
                total_body_part.totalRmExercise += rm_show ? 1 : 0;
                total_body_part.totalLoad += rm_show ? workout.reps * workout.rm : 0;
              }
            });

            if (!flg) {
              tmpData['total_body_parts'].push({
                name: workout.bodypart_name,
                totalReps: parseInt(workout.reps),
                totalRm: rm_show ? parseFloat(workout.rm) : 0,
                totalExercise: 1,
                totalRmExercise: rm_show ? 1 : 0,
                totalLoad: rm_show ? workout.reps * workout.rm : 0
              });
            }
          }
        });
        /*********************** ********************/

      //   let isTestDay = false;
      //   this.workouts.forEach(workout => {
      //     if (workout.plan == day.plan) {
      //       if (workout.method == 3) {
      //         isTestDay = true;
      //       }

      //       var flg = false;
      //       tmpData['body_parts'].forEach(body_part => {
      //         if (body_part.name == workout.bodypart_name) {
      //           flg = true;
      //           var ex_flg = false;
      //           body_part.exercises.forEach(exercise => {
      //             if (exercise.name == workout.name) {
      //               ex_flg = true;
      //               exercise.data.push(workout);
      //               exercise.row++;
      //               body_part.row++;
      //               body_part.totalReps += parseInt(workout.reps);
      //               body_part.totalRm += parseFloat(workout.rm);
      //               body_part.totalExercise++;
      //               body_part.totalLoad += workout.reps * workout.rm;
      //             }
      //           });

      //           if (!ex_flg) {
      //             body_part.exercises.push({
      //               name: workout.name,
      //               data: [workout],
      //               row: 1
      //             });
      //             body_part.row++;
      //             body_part.totalReps += parseInt(workout.reps);
      //             body_part.totalRm += parseFloat(workout.rm);
      //             body_part.totalExercise += 1;
      //             body_part.totalLoad += workout.reps * workout.rm;
      //           }
      //           // body_part.exercises.push(workout);
      //         }
      //       });
      //       if (!flg) {
      //         tmpData['body_parts'].push({
      //           name: workout.bodypart_name,
      //           exercises: [{
      //             name: workout.name,
      //             data: [workout],
      //             row: 1,
      //           }],
      //           row: 1,
      //           totalReps: parseInt(workout.reps),
      //           totalRm: parseFloat(workout.rm),
      //           totalExercise: 1,
      //           totalLoad: workout.reps * workout.rm
      //         });
      //       }
      //       if (tmpData['body_parts'].length == 0) {
      //         tmpData['body_parts'].push({
      //           name: workout.bodypart_name,
      //           exercises: [{
      //             name: workout.name,
      //             data: [workout],
      //             row: 1
      //           }],
      //           row: 1,
      //           totalReps: parseInt(workout.reps),
      //           totalRm: parseFloat(workout.rm),
      //           totalExercise: 1,
      //           totalLoad: workout.reps * workout.rm
      //         });
      //       }
      //     }
      //   });

        day.isTestDay = isTestDay;
        temp.push(tmpData);
      });
      dataArray.push(temp);
    })

    this.data = dataArray;
    console.log(">>> data: ", JSON.parse(JSON.stringify(this.data)));

    this.dataService.calculateStatistics();
    this.dataService.calculateOverloadGraphData();
    this.dataService.getProgressionModels();
    this.isLoading = false;
    this.spinner.hide();
  }

}
