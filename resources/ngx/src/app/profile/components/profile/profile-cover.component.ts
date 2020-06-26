import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-profile-cover',
  templateUrl: './profile-cover.component.html'
})
export class ProfileCoverComponent implements OnInit{
    
  @Input() applicationUser: any;
  avatar: string;
  isdefault: boolean;
  ngOnInit(): void {
    if (this.applicationUser.profile != null && this.applicationUser.profile.avatar != '' && this.applicationUser.profile.avatar != null) {
      this.avatar = this.applicationUser.profile.avatar;
      this.isdefault = false;
    } else {
      this.avatar = '/assets/images/icons/icon-profile-big.png';
      this.isdefault = true;
    }
  }

  get fullName(){
    return this.applicationUser !== undefined ? this.applicationUser.name : '';
  }
}
