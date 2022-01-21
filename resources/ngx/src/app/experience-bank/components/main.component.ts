
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { HttpClient } from '@angular/common/http';
import { ENTER_INFO_STATUS_EXPBANK } from '../../constants';

@Component({
  selector: 'osg-experience-bank',
  templateUrl: './main.component.html'
})
export class ExperienceBankComponent implements OnInit{
  status: string = ENTER_INFO_STATUS_EXPBANK;

  constructor(private router: Router, private store: StoreService, private http: HttpClient) {}

  swal: SweetAlert = _swal as any;

  mainMuscleGroups: any = null;

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }

  ngOnInit(): void {
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

    this.http.get('/getMainMuscleGroups').subscribe((resp: any) => {
      console.log('>>> get main muscle group resp: ', resp);

      this.mainMuscleGroups = resp.muscleGroups;
    })
  }
}
