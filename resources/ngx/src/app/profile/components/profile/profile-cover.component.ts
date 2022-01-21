import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subscription} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { MessageService } from '../../../core/services/data.service';
import { MESSAGE_PROFILE_UPDATED } from '../../../message.info';
@Component({
  selector: 'osg-profile-cover',
  templateUrl: './profile-cover.component.html'
})
export class ProfileCoverComponent implements OnInit{

  @Input() applicationUser: any;
  @ViewChild('avatarImage') avatarImage: ElementRef;

  avatar: string;
  isdefault: boolean;
  isfriend: string;
  routeUserId: any = null;

  fullName = "";

  isEditing = false;
  avatarTemp: string;
  fullNameTemp = "";

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  constructor(private http: HttpClient, private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private messageService: MessageService
  ) {

    }
  ngOnInit(): void {

    this.fullName = this.applicationUser.profile !== undefined ? this.applicationUser.profile.name : '';

    this.activatedRoute.params.subscribe(routeParams => {
      console.log('---- profile-cover cur url: ', this.router.url);
      console.log('---- profile-cover routeUserId: ', this.routeUserId);
      console.log('---- profile-cover from_other_profile: ', this.from_other_profile);

      if (!this.routeUserId)
        this.routeUserId = routeParams.handle;
      else
        this.reloadComponent();
      console.log('---- profile-cover routeUserId: ', this.routeUserId);
      console.log('>>> active params: ', routeParams);
    })

    if (this.applicationUser.profile != null && this.applicationUser.profile.avatar != '' && this.applicationUser.profile.avatar != null) {
      this.avatar = this.applicationUser.profile.avatar;
      this.isdefault = false;
    } else {
      this.avatar = '/assets/images/icons/icon-profile-big.png';
      this.isdefault = true;
      this.isfriend = '0';
    }

    if (this.applicationUser.profile != null)
      this.isfriend = this.applicationUser.profile.is_friend;
    else
      this.isfriend = '0';
  }

  reloadComponent() {
    console.log('---- profile-cover reloadComponent: ', this.router.url);
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  requestFriend() {
    this.http.post('profile/requestFriend', { friend_id: this.applicationUser.profile.user_id })
      .subscribe(resp => {
        this.isfriend = '1';
      });
  }

  onClickEdit() {
    this.isEditing = true;
    this.avatarTemp = this.avatar;
    this.fullNameTemp = this.fullName;

    this.avatarImage.nativeElement.value = null;
    this.avatarImage.nativeElement.addEventListener("change", this.onChangeImage);
  }

  /**
    this is called when the user changes image
   */
  onChangeImage = (evt) => {
    console.log('>>> offer image changed');
    const file = this.avatarImage.nativeElement.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.avatar = reader.result as string;
      this.isdefault = false;
    }
  }

  /**
    this is called when the user clicks image edit button
   */
  onClickImage = () => {
    if (this.isEditing)
      this.avatarImage.nativeElement.click();
  }

  save() {

    const formData = new FormData();
    const file = this.avatarImage.nativeElement.files[0];
    console.log('>>> image file data: ', file);
    formData.append('avatar', file);
    formData.append('user_name', this.fullName);

    this.http.post('/profile/saveProfile', formData).subscribe(resp => {
      console.log('>>>>>> save profile result: ', resp);

      this.isEditing = false;
      this.messageService.sendMessage(MESSAGE_PROFILE_UPDATED, '');

    })
  }

  cancel() {
    this.isEditing = false;
    this.fullName = this.fullNameTemp;
    this.avatar = this.avatarTemp;

    if (this.avatar == '/assets/images/icons/icon-profile-big.png')
      this.isdefault = true;
  }
}
