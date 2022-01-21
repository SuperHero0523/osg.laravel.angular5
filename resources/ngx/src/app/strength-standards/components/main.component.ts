import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import { ENTER_INFO_STATUS_STRENSTAND } from '../../constants';
import { HttpClient } from '@angular/common/http';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'osg-strength-standards',
  templateUrl: './main.component.html'
})
export class StrengthStandardsComponent implements OnInit{
  status: string = ENTER_INFO_STATUS_STRENSTAND;
  public isShow:boolean=false;
  public link_name:any='Read More';
  swal: SweetAlert = _swal as any;

  mainMuscleGroups: any = null;

  applicationUser: any;

  constructor(private readonly applicationService: ApplicationService, private router: Router, private store: StoreService, private http: HttpClient) {}

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }

  async ngOnInit() {
    console.log('>>>> application user: ', this.applicationUser)

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

  toggle() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.link_name = "Read Less";

    } else {
      this.link_name="Read More";
    }
  }

}
