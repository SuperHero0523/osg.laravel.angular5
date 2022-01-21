import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { StoreService } from '../../../store/store.service';
import * as moment from 'moment';
import { MessageService } from '../../../core/services/data.service';
import { MESSAGE_ATHLETE_LOGGED } from '../../../message.info';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'osg-strength-athlete',
  templateUrl: './strength-athlete.component.html'
})
export class StrengthAthleteComponent implements OnInit {

  @Input() applicationUser: ApplicationUser;

  getStartedSections: string[] = ["the strength athlete profile", "about auto-regulation", "strength standards guide", "experience bank guide", "program design guide"];
  current_set: string;

  constructor(private http: HttpClient, private store: StoreService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private dataService: DataService, private messageService: MessageService) { }

  get calendar_workout_logs() {
    return this.store.getCalendarWorkoutLogs();
  }
  set calendar_workout_logs(val) {
    this.store.setCalendarWorkoutLogs(val);
  }

  get required_preinterview() {
    return this.store.getRequiredPreinterview();
  }
  set required_preinterview(val) {
    this.store.setRequiredPreinterview(val);
  }

  get required_postinterview() {
    return this.store.getRequiredPostinterview();
  }
  set required_postinterview(val) {
    this.store.setRequiredPostinterview(val);
  }

  set cur_calendar_id(id) {
    this.store.setCurCalendarId(id);
  }
  routeUserId: any = null;

  ngOnInit(): void {
    console.log(">>> strength-athlete component init")
    this.current_set = "profile";

    this.activatedRoute.params.subscribe(routeParams => {
      console.log('>>> cur url: ', this.router.url);
      if (!this.routeUserId)
        this.routeUserId = routeParams.handle;
      else
        this.reloadComponent();
      console.log('>>> active params: ', routeParams);
    })

    this.messageService.sendMessage(MESSAGE_ATHLETE_LOGGED, this.activatedRoute.snapshot.params.handle != undefined ? this.activatedRoute.snapshot.params.handle : "");
    this.getInterviewPoint();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  NextPage() {
    this.current_set = "graph";
    window.scrollTo(0, 200);
  }

  PreviousPage() {
    this.current_set = "profile";
    window.scrollTo(0, 200);
  }

  async getInterviewPoint() {
    await new Promise((resolve) => {
      let interval = setInterval(() => {
        if (this.calendar_workout_logs != null) {
          if (this.required_preinterview || this.required_postinterview) {
            this.current_set = "graph";
          }

          clearInterval(interval);
          resolve(0);
        }
      }, 100)
    })
  }

}
