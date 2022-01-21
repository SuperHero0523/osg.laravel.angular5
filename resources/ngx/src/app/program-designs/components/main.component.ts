import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getCookie, saveCookie } from '../../constants';
import { Router } from '@angular/router';
import { StoreService } from '../../store/store.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { ApplicationService } from '../../core/services/application.service';
import { Weeks } from '../../types';
import { DataService } from '../../data.service';

const DESIGNS_PAGE_COOKIE_NAME = "ProgramDesigns"

@Component({
  selector: 'osg-program-designs',
  templateUrl: './main.component.html'
})

export class ProgramDesignsComponent implements OnInit {

  // condition array
  categoryChecked = {
    strength: false,
    hypertrophy: false,
    muscular: false,
    power: false,
  };
  categoryOptions = {
    strength: "Strength",
    hypertrophy: "Hypertrophy",
    muscular: "Muscular endurance",
    power: "Power",
  };
  categoryList = Object.keys(this.categoryOptions)

  splitValues = ["All", '1', '2', '3', '4', '5', '6', '7+'];

  workoutsPerWeekValues = ["All", '1-2', '3-4', '5-6', '7+'];

  lengthOfProgramValues = ['All', '1-4', '5-8', '9-12', '12-15', '16+'];

  mainMuscleGroups: any = [];
  bodyParts = ["All"];
  testExercises = [];
  testExNames = ["All"];

  // type of exercise check
  exerciseTypeChecked = {
    barbell: false,
    dumbbell: false,
    cableMachine: false,
    other: false,
  }
  exerciseTypeOptions = {
    barbell: 'Barbell',
    dumbbell: 'Dumbbell',
    cableMachine: 'Cable & Machine',
    other: 'Body weight & Other',
  }
  exerciseTypeList = Object.keys(this.exerciseTypeOptions)

  // progression model check
  progressionModelChecked = {
    intensity: false,
    volume: false,
    frequency: false,
  }
  progressionModelOptions = {
    intensity: 'Intensity',
    volume: 'Volume',
    frequency: 'Frequency',
  }
  progressionModelDescOptions = {
    intensity: '(Load and/or reps to failure)',
    volume: '(Reps and sets)',
    frequency: '(Sessions per body part per week)',
  }
  progressionModelList = Object.keys(this.progressionModelOptions)

  // sel conditions
  split: string = "All";
  workoutsPerWeek: string = "All";
  weeks: string = "All";
  bodyPart: string = "All";
  testExercise: string = "All";

  rate_value = [
    'zero', 'worst', 'worse', 'middle', 'good', 'excellent'
  ];

  // result
  recommendedPrograms: any = [];

  swal: SweetAlert = _swal as any;

  applicationUser: any;

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }

  get design_page_env() {
    return this.dataService.program_designs_page_env;
  }
  set design_page_env(value) {
    this.dataService.program_designs_page_env = value;
  }

  constructor(private router: Router,
    private store: StoreService,
    private dataService: DataService,
    private http: HttpClient,
    private readonly applicationService: ApplicationService) {

    console.log('--------------- program designs page construction ---------------- ');
  }

  async ngOnInit() {
    console.log('--------------- program designs page init ---------------- ');
    this.store.state$.subscribe(async store => {
      console.log(">>> state: ", store);

      console.log(`>>> required post interview: `, this.required_postinterview)
      if (this.required_postinterview) {
        this.swal({
          title: '',
          text: 'Please fill out the post-interview form, in order to analyze your results.',
          icon: 'warning',
          buttons: {
            confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
          }
        }).then((value) => {
          this.router.navigate(['/interview']);
        });
      }

      console.log(`>>> required pre interview: `, this.required_preinterview)
      if (this.required_preinterview) {
        this.swal({
          title: '',
          text: 'Please fill out the pre-interview form before starting, in order to customize the program to you',
          icon: 'warning',
          buttons: {
            confirm: {text: 'Continue', className: 'btn-yellow-gradient'}
          }
        }).then((value) => {
          this.router.navigate(['/interview']);
        });
      }
    });

    this.applicationUser = await this.applicationService.getAuthenticatedUser().toPromise();
    console.log('------------ application user: ', this.applicationUser);

    const user_id = this.applicationUser.id;

    // get page env value
    if (this.design_page_env != "") {
      const values = JSON.parse(this.design_page_env);
      console.log('>>>>> page env: ', values)
      for (let val of values) {
        if (val.id == user_id) {
          this.categoryChecked = val.categoryChecked;
          this.split = val.split;
          this.workoutsPerWeek = val.workoutsPerWeek;
          this.weeks = val.weeks;
          this.bodyPart = val.bodyPart;
          this.testExercise = val.testExercise;
          this.exerciseTypeChecked = val.exerciseTypeChecked;
          this.progressionModelChecked = val.progressionModelChecked;
          break;
        }
      }
    }
    console.log('----------- env value: ', this.design_page_env);

    this.getBodyParts();
  }

  /**
   * get body parts
   */
  getBodyParts = () => {
    this.http.get('/getMainMuscleGroups').subscribe((resp: any) => {
      console.log('>>> get main muscle group resp: ', resp);

      this.mainMuscleGroups = resp.muscleGroups;
      this.bodyParts = this.mainMuscleGroups.map(muscleGroup => muscleGroup.name);
      this.bodyParts.splice(0, 0, "All");

      console.log('>>> body part: ', this.bodyPart);
      if (this.bodyPart == 'All') {
        this.testExNames = ['All'];
        this.testExercise = 'All';
        this.onSearch();

      } else {
        let muscleGroup = this.mainMuscleGroups.filter(el => el.name == this.bodyPart)[0];
        this.getExercisesOfBodypart(muscleGroup.id, true);
      }

    })
  }

  /**
   * get exercises of selected bodypart
   * @param bodypartId
   */
  getExercisesOfBodypart = (bodypartId, shouldSearch = false) => {
    this.http.get('/getExercisesByBodypart?bodypart_id=' + bodypartId).subscribe((resp: any) => {
      console.log('>>> bodyparts resp: ', resp);
      this.testExercises = resp.exercises;
      this.testExNames = this.testExercises.map(el => (el.name as string).toUpperCase());
      this.testExNames.splice(0, 0, "All");

      if (shouldSearch)
        this.onSearch();
    })
  }

  /**
   * this is called when the user changes body part
   * @returns
   */
  onChangeBodyPart = () => {
    console.log('>>> change body part: ', this.bodyPart)
    if (this.bodyPart == "All") {
      this.testExercise = "All";
      this.testExNames = ["All"];
      return;
    }

    let muscleGroup = this.mainMuscleGroups.filter(el => el.name == this.bodyPart)[0];
    console.log('>> muscle group: ', muscleGroup)
    this.getExercisesOfBodypart(muscleGroup.id);
    this.testExercise = "All";
  }

  /**
   *
   */
  onSearch = () => {
    console.log('>>> cateogry: ', this.categoryChecked);
    console.log('>>> split: ', this.split);
    console.log('>>> workouts per weeks: ', this.workoutsPerWeek);
    console.log('>>> weeks: ', this.weeks);
    console.log('>>> testExercise: ', this.testExercise);
    console.log('>>> testExercises: ', this.testExercises);

    console.log('>>> type of exercise', this.exerciseTypeChecked);
    console.log('>>> progression model', this.progressionModelChecked);

    // save cookie value
    const user_id = this.applicationUser.id;

    let values = [];
    const envVal = this.design_page_env;
    console.log('>>> application user ', this.applicationUser);
    console.log('>>> design page env ', this.design_page_env);
    if (envVal != "") {
      values = JSON.parse(envVal);
      values = values.filter((val) => val.id != user_id);
      console.log('------------- filtered values: ', values);
    }

    const saveValue = {
      id: user_id,
      categoryChecked: this.categoryChecked,
      split: this.split,
      workoutsPerWeek: this.workoutsPerWeek,
      weeks: this.weeks,
      bodyPart: this.bodyPart,
      testExercise: this.testExercise,
      exerciseTypeChecked: this.exerciseTypeChecked,
      progressionModelChecked: this.progressionModelChecked
    }
    values.push(saveValue);
    this.design_page_env = JSON.stringify(values);
    console.log('----- set env string: ', JSON.stringify(values));

    // search
    let searchCondition = {
      category: this.categoryChecked,
      split: this.split == 'All' ? '' : this.split,
      workoutsPerWeek: this.workoutsPerWeek == 'All' ? '' : this.workoutsPerWeek,
      weeks: this.weeks == 'All' ? '' : this.weeks,
      bodyPart: -1,
      bodyPartName: '',
      testExercise: -1,
      exerciseType: this.exerciseTypeChecked,
      progressionModel: this.progressionModelChecked
    }

    if (this.bodyPart != "All") {
      searchCondition.bodyPart = this.mainMuscleGroups.filter(el => el.name == this.bodyPart)[0].id;
      searchCondition.bodyPartName = this.bodyPart;
    }

    if (this.testExercise != "All") {
      searchCondition.testExercise = this.testExercises.filter(el => (el.name as string).toUpperCase() == this.testExercise)[0].id;
    }

    console.log("... search condition: ", searchCondition);


    let body = {
      condition: JSON.stringify(searchCondition)
    }

    this.http.post('/getRecommendedPrograms', body).subscribe((resp: any) => {
      console.log('>>> get recommended programs: ', resp);
      this.recommendedPrograms = resp.result;
      console.log('>>> get recommended programs: ', this.recommendedPrograms);
    })

  }


  /**
   * update exercise type value
   */
  updateExerciseTypeValue() {
    let value = "";
    let bAllChecked = true;
    for (let key of Object.keys(this.exerciseTypeOptions)) {
      if (this.exerciseTypeChecked[key]) {
        value += value == "" ? "" : ", ";
        value += this.exerciseTypeOptions[key].split(" (")[0];
      } else {
        bAllChecked = false;
      }
    }

    if (value == "")
      value = "None";
    else if (bAllChecked)
      value = "All";
  }

  /**
   * this is called when the user changes exercise type check boxes
   */
  onChangeExerciseType = () => {
    console.log('-------------- on change exercise type: ', this.exerciseTypeChecked);
    // this.exerciseTypeChecked = selection;
    this.updateExerciseTypeValue();
  }

  /**
   * update progression model value
   */
  updateProgressionModelValue() {
    let value = "";
    let bAllChecked = true;
    for (let key of Object.keys(this.progressionModelOptions)) {
      if (this.progressionModelChecked[key]) {
        value += value == "" ? "" : ", ";
        value += this.progressionModelOptions[key].split(" (")[0];
      } else {
        bAllChecked = false;
      }
    }

    if (value == "")
      value = "None";
    else if (bAllChecked)
      value = "All"
  }

  /**
   * this is called when the user changes progression model check boxes
   */
  onChangeProgressionModel = () => {
    this.updateProgressionModelValue();
  }

  /**
   * go to the program designer profile with program name
   * @param programInfo
   */
  gotoProgram = (programInfo) => {
    console.log('------ program info: ', programInfo)
    this.router.navigate(['/profile/', programInfo.designer_id], { queryParams: { program: programInfo.name } });
  }
}
