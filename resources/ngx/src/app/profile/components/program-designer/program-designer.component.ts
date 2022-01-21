import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { DataService } from '../../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'osg-program-designer',
  templateUrl: './program-designer.component.html'
})
export class ProgramDesignerComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;
  getStartedSections: string[] = ["The program designer profile", "Get better results based on feedback", "Progressive overload", "Uploading a program"];
  current_set: string;

  routeUserId: any = null;

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.current_set = "profile";
    this.activatedRoute.params.subscribe(routeParams => {
      console.log('>>> program designer cur url: ', this.router.url);
      if (!this.routeUserId)
        this.routeUserId = routeParams.handle;
      else
        this.reloadComponent();

      if (this.router.url.includes("program")) {
        this.NextPage();
      }
      console.log('>>> active params: ', routeParams);
    })
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.routeUserId = null;
  }

  NextPage() {
    this.current_set = "graph";
    window.scrollTo(0, 200);
  }

  PreviousPage() {
    this.current_set = "profile";
    window.scrollTo(0, 200);
  }
}
