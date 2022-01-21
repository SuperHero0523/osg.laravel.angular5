import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../core/services/data.service';
import { Subscription } from 'rxjs';
import { MESSAGE_STRENGTH_STANDARD_SETINFO } from '../../../message.info';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
import { LEVELS, LEVEL_RATIOS } from '../../../constants';

@Component({
  selector: 'osg-strength-standards-exercise-table',
  templateUrl: './exercise-table.component.html'
})
export class StrengthStandardsExerciseTable implements OnInit{

  @Input() muscleGroup: any;

  swal: SweetAlert = _swal as any;

  exercises: any = null;
  selExercise: any = null;

  filter: any = {
    gender: 'male',
    weight_min: 50,
    weight_max: 59
  }

  subscription: Subscription;

  // standard values
  standardValues: any = [];

  // lift
  lift = "";
  reps = "";
  rm = "";
  level = "";

  // percentage values
  percentageValues: any = {};

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log('>>>> muscle group message subscribe: ', message);
      if (message.info === MESSAGE_STRENGTH_STANDARD_SETINFO) {
        let oldGender = this.filter.gender;
        this.filter = JSON.parse(message.text);

        this.InitializeOutputValues();

        // if the gender is changed, we need to change the strength standard values
        if (this.filter.gender != oldGender) {
          this.getStrengthStandardValues();
        }
      }
    });
  }

  ngOnInit(): void {
    this.http.get('/getExercisesByBodypart?bodypart_id=' + this.muscleGroup.id).subscribe((resp: any) => {
      console.log('>>> get exercises by body part resp: ', resp);
      this.exercises = resp.exercises;
      if (resp.exercises.length) {
        this.selExercise = this.exercises[0];
        this.getStrengthStandardValues();
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  InitializeOutputValues() {
    this.rm = "";
    this.level = "";
    this.percentageValues = {};
  }

  onClickExercise = (index) => {
    this.selExercise = this.exercises[index];

    this.getStrengthStandardValues();
  }

  onCalculate = () => {
    if (this.lift == '' || this.reps == '') {
      this.swal({
        title: '',
        text: 'Please input lift and reps values',
        icon: 'warning',
        buttons: {
          confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
        }
      }).then((value) => {
      });
      return;
    }

    console.log(`>>> lift: ${this.lift}, reps: ${this.reps} `)

    const digitsReg = /^[1-9][0-9]+$/g;
    if (!digitsReg.test(this.lift)) {
      this.swal({
        title: '',
        text: 'Only digit values should be allowed in the lift input',
        icon: 'warning',
        buttons: {
          confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
        }
      }).then((value) => {
      });
      return;
    }

    // const repsDigitsReg = /^[1-9][0-9]+$/g;
    // if (!repsDigitsReg.test(this.reps)) {
    //   this.swal({
    //     title: '',
    //     text: 'Only digit values should be allowed in the reps input',
    //     icon: 'warning',
    //     buttons: {
    //       confirm: { text: 'Continue', className: 'btn-yellow-gradient' }
    //     }
    //   }).then((value) => {
    //   });
    //   return;
    // }

    // calculate rm
    this.rm = (parseFloat(this.lift) * (1 + parseFloat(this.reps) / 30.0)).toFixed(0);

    for (let row of this.standardValues) {
      if (row.weight_min != this.filter.weight_min) continue;

      if (this.rm >= row.elite) {
        this.level = LEVELS.elite;
      } else if (this.rm >= row.advanced) {
        this.level = LEVELS.advanced;
      } else if (this.rm >= row.intermediate) {
        this.level = LEVELS.intermediate;
      } else if (this.rm >= row.novice) {
        this.level = LEVELS.novice;
      } else {
        this.level = LEVELS.untrained;
      }
      break;
    }

    this.getPercentageValues();
  }

  /**
   * get strencth standard values
   * @returns
   */
  getStrengthStandardValues() {
    this.InitializeOutputValues();

    if (this.selExercise == null) return;

    // get standard values
    const url = '/strengthstandard/getStrengthStandardValues?exercise_id=' + this.selExercise.id + "&gender=" + this.filter.gender
    this.http.get(url).subscribe((resp: any) => {
      console.log('>>> get strength standard values api resp: ', resp);
      this.standardValues = resp.result;
      this.standardValues.map(el => {
        el.untrained = Math.floor(el.elite * LEVEL_RATIOS.untrained);
        el.novice = Math.floor(el.elite * LEVEL_RATIOS.novice);
        el.intermediate = Math.floor(el.elite * LEVEL_RATIOS.intermediate);
        el.advanced = Math.floor(el.elite * LEVEL_RATIOS.advanced);
      })
      console.log('>>> standard values: ', this.standardValues);
    })
  }

  getPercentageValues() {
    if (this.selExercise == null) return;

    let body = {
      exercise_id: this.selExercise.id,
      filter: JSON.stringify(this.filter),
      rm: this.rm
    }

    this.http.post('/strengthstandard/getPercentageValuesByFilter', body).subscribe((resp: any) => {
      console.log('>>> get top programs api resp: ', resp);
      this.percentageValues = resp.result;
    })
  }

}
