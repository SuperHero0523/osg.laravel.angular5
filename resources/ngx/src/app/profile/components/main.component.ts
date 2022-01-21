import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationUser, ApplicationUserRole } from 'src/app/core/classes/user';
import { ApplicationService } from 'src/app/core/services/application.service';
import { DataService } from '../../data.service';
import { Weeks, Week } from '../../types';
import { MessageService } from '../../core/services/data.service';
import { MESSAGE_PROFILE_UPDATED } from '../../message.info';


@Component({
  selector: 'osg-profile',
  templateUrl: './main.component.html'
})
export class ProfileComponent implements OnInit{

  user_id: any = null;
  sub;
  routeUserId: any = null;

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

  get calendar_list() {
    return this.dataService.calendar_list;
  }
  set calendar_list(val) {
    this.dataService.calendar_list = val;
  }

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  // set applicationUser(val) {
  //   this.dataService.applicationUser = val;
  // }

  applicationUser: any;
  constructor(private readonly applicationService: ApplicationService,
              private dataService: DataService,
              private router: Router,
              private messageService: MessageService,
    private activatedRoute: ActivatedRoute) {
    this.messageService.getMessage().subscribe(async message => {

      if (message.info === MESSAGE_PROFILE_UPDATED) {
        this.applicationUser = await this.applicationService.getAuthenticatedUser(true).toPromise();
      }
    });

  }

  async ngOnInit() {

    console.log("route receive");
    this.sub = this.activatedRoute.paramMap.subscribe(async params => {
      const user_id = params.get('handle');

      if (user_id == null) {
        this.applicationUser = await this.applicationService.getAuthenticatedUser(this.from_other_profile).toPromise();
      } else {
        this.applicationUser = await this.applicationService.getUserProfile(user_id).toPromise();
      }

      console.log('------- profile main component application user: ', this.applicationUser);
    });

    // if (!this.user_id) {
    //   this.applicationUser = await this.applicationService.authenticatedUser.toPromise();
    // } else {
    //   this.applicationUser = await this.applicationService.getUserProfile(this.user_id).toPromise();
    // }

    this.data = [];
    this.weeks = [];
    this.workouts = [];
    this.plans = [];
    this.design_data = [];
    this.calendar_list = null;
  }

  get role(){
    return this.applicationUser !== undefined ? this.applicationUser.profile.role : '';
  }


  isPersonalTrainer(): boolean{
    return this.role === ApplicationUserRole.PersonalTrainer;
  }

  isProgramDesigner(): boolean{
    return this.role === ApplicationUserRole.ProgramDesigner;
  }

  isStrengthAthlete(): boolean{
    return this.role === ApplicationUserRole.StrengthAthlete;
  }

  isFriend():boolean {
    if (this.applicationUser !== undefined) {
      if (this.applicationUser.profile.is_friend > 1)
        return true;
    }
    return false;
  }
}
