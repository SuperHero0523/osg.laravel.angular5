import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'osg-personal-trainer',
  templateUrl: './personal-trainer.component.html'
})
export class PersonalTrainerComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;

  getStartedSections: string[] = ["calendar builder guide", "progression model guide", "about auto-regulation"];
  current_set: string = 'profile';
  routeUserId: any = null;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      console.log('>>> cur url: ', this.router.url);
      if (!this.routeUserId)
        this.routeUserId = routeParams.handle;
      else
        this.reloadComponent();
      console.log('>>> active params: ', routeParams);
    })
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
}
