import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Meta } from '@angular/platform-browser';
import { ApplicationUserRole } from '../../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'osg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  user: any;
  isMobile: any;
  isCollapsed: boolean;
  isSearch: boolean;
  isProfile: boolean;

  @ViewChild('logoutForm') logoutForm: ElementRef;
  constructor(private readonly applicationService: ApplicationService, private readonly meta: Meta, private router: Router){
    if (ApplicationUserRole.StrengthAthlete) {
      this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    } else {
      this.isMobile = false;
    }
    this.isCollapsed = false;
    this.isSearch = false;
    this.isProfile = false;
  }

  async ngOnInit() {
    this.user = await this.applicationService.authenticatedUser.toPromise();
  }

  get fullName() {
    return this.user !== undefined ? this.user.name : '';
  }

  get csrf() {
    return this.meta.getTag('name=csrf-token').content;
  }

  get role(): string {
    return this.user ? this.user.role : '';
  }


  get isPersonalTrainer(): boolean {
    return this.role === ApplicationUserRole.PersonalTrainer;
  }

  get isProgramDesigner(): boolean {
    return this.role === ApplicationUserRole.ProgramDesigner;
  }

  get isStrengthAthlete(): boolean {
    return this.role === ApplicationUserRole.StrengthAthlete;
  }

  logout() {
    this.logoutForm.nativeElement.submit();
  }

  link(link: string) {
    this.toggle();
    if (this.isProfile) {
      this.isProfile = false;
    }
    this.router.navigate([link]);
  }

  menu(link: string) {
    this.toggle();
    this.profile();
    this.router.navigate([link]);
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  search() {
    this.isSearch = !this.isSearch;
  }

  profile() {
    this.isProfile = !this.isProfile;
  }
}
