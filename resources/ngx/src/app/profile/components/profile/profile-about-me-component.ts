import { Component, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../../../core/classes/user';
import { ApplicationService } from '../../../core/services/application.service';
import { MessageService } from '../../../core/services/data.service';
import { MESSAGE_PROFILE_UPDATED } from '../../../message.info';

@Component({
  selector: 'osg-profile-about-me',
  templateUrl: './profile-about-me.component.html'
})
export class ProfileAboutMeComponent {

  @Input() applicationUser: ApplicationUser;

  text: string = '';
  interest: string = '';
  education: string = '';
  special: string = '';
  experience: string = '';
  country: string = '';
  location: string = '';
  profile: string = '';
  email: string = '';
  workplace: string = '';
  place: string = '';

  isEditing = false;
  origin: any = {
    text: '',
    interest: '',
    education: '',
    special: '',
    experience: '',
    country: '',
    location: '',
    profile: '',
    email: '',
    workplace: '',
    place: ''
  };

  set from_other_profile(value) {
    this.dataService.from_other_profile = value;
  }
  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  set profile_user(value) {
    this.dataService.profile_user = value;
  }

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private messageService: MessageService
  ) {

  }
  ngOnInit(): void {
    console.log(">>> profile-about-me component init")
    console.log(">>> workplace: ", this.workplace)
    console.log(">>> place: ", this.place)

    this.text = this.applicationUser.profile ? this.applicationUser.profile.description : '';
    this.interest = this.applicationUser.profile.interest != undefined ? this.applicationUser.profile.interest : '';
    this.education = this.applicationUser.profile.education != undefined ? this.applicationUser.profile.education : '';
    this.special = this.applicationUser.profile.special != undefined ? this.applicationUser.profile.special : '';
    this.experience = this.applicationUser.profile.experience != undefined ? this.applicationUser.profile.experience : '';
    this.country = this.applicationUser.profile.country != undefined ? this.applicationUser.profile.country : '';
    this.location = this.applicationUser.profile.location != undefined ? this.applicationUser.profile.location : '';
    this.workplace = this.applicationUser.profile.workplace_address != undefined ? this.applicationUser.profile.workplace_address : '';
    this.place = this.applicationUser.profile.place != undefined ? this.applicationUser.profile.place : '';
    this.email = this.applicationUser.profile.email != undefined ? this.applicationUser.profile.email : '';


    const role = this.applicationUser.profile ? this.applicationUser.profile.role : 'StrengthAthlete';
    switch (role) {
      case 'StrengthAthlete':
        this.profile = 'Strength Athlete';
        break;

      case 'ProgramDesigner':
        this.profile = 'Program Designer';
        break;

      case 'PersonalTrainer':
        this.profile = 'Personal Trainer';
        break;
    }

    if (this.activatedRoute.snapshot.params.handle != undefined) {
      this.from_other_profile = true;
      this.profile_user = this.activatedRoute.snapshot.params.handle.split('?')[0];
      console.log('>>> user id: ', this.activatedRoute.snapshot.params.handle);

    } else {
      this.from_other_profile = false;
      this.profile_user = -1;
    }
  }

  onClickEdit = () => {
    this.isEditing = true;

    this.origin.text = this.text;
    this.origin.interest = this.interest;
    this.origin.education = this.education;
    this.origin.special = this.special;
    this.origin.experience = this.experience;
    this.origin.country = this.country;
    this.origin.location = this.location;
    this.origin.email = this.email;
    this.origin.workplace = this.workplace;
    this.origin.place = this.place;
  }

  save = () => {

    if (this.text == "")
      this.text = this.origin.text;

    if (this.origin.interest != "" && this.interest == "")
      this.interest = this.origin.interest;

    if (this.origin.education != "" && this.education == "")
      this.education = this.origin.education;

    if (this.origin.special != "" && this.special == "")
      this.special = this.origin.special;

    if (this.origin.experience != "" && this.experience == "")
      this.experience = this.origin.experience;

    if (this.origin.country != "" && this.country == "")
      this.country = this.origin.country;

    if (this.origin.location != "" && this.location == "")
      this.location = this.origin.location;

    if (this.origin.email != "" && this.email == "")
      this.email = this.origin.email;

    if (this.origin.workplace != "" && this.workplace == "")
      this.workplace = this.origin.workplace;

    if (this.origin.place != "" && this.place == "")
      this.place = this.origin.place;


    const formData = new FormData();

    if (this.text != '')        formData.append('description', this.text);
    if (this.interest != '')    formData.append('interest', this.interest);
    if (this.education != '')   formData.append('education', this.education);
    if (this.special != '')     formData.append('special', this.special);
    if (this.experience != '')  formData.append('experience', this.experience);
    if (this.country != '')     formData.append('country', this.country);
    if (this.location != '')    formData.append('location', this.location);
    if (this.email != '')       formData.append('email', this.email);
    if (this.workplace != '')   formData.append('workplace', this.workplace);
    if (this.place != '')       formData.append('place', this.place);

    this.http.post('/profile/saveProfile', formData).subscribe(async resp => {
      console.log('>>>>>> save profile result: ', resp);

      this.isEditing = false;
      this.messageService.sendMessage(MESSAGE_PROFILE_UPDATED, '');
    })
  }

  cancel = () => {
    this.isEditing = false;

    this.text = this.origin.text;
    this.interest = this.origin.interest;
    this.education = this.origin.education;
    this.special = this.origin.special;
    this.experience = this.origin.experience;
    this.country = this.origin.country;
    this.location = this.origin.location;
    this.email = this.origin.email;
    this.workplace = this.origin.workplace;
    this.place = this.origin.place;
  }
}
