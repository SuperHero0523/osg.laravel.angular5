import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { DataService } from '../../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../../../core/services/data.service';
import { Subscription } from 'rxjs';
import { MESSAGE_DESIGNER_PROFILE_EXPBANK } from '../../../message.info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'osg-program-designer-experience-bank',
  templateUrl: './experience-bank.component.html'
})
export class ProgramDesignerExperienceBankComponent implements OnInit{

  get first_program() {
    return this.dataService.first_program;
  }
  get first_program_change() {
    return this.dataService.first_program_change$;
  }

  expected_data = {
    male: [],
    female: []
  };

  top_results = {
    male: [],
    female: []
  }

  subscription: Subscription;
  constructor(private spinner: NgxSpinnerService,
            private http: HttpClient,
            private dataService: DataService,
            private messageService: MessageService,
            private activatedRoute: ActivatedRoute
  ) {

    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message.info == MESSAGE_DESIGNER_PROFILE_EXPBANK) {
        let params = message.text;
        this.getExpectedData(params);
      }
    })

    this.first_program_change.subscribe((change) => {
      console.log('>>> first program changed(experience bank) ');
      this.getTopThreeData();
    })
  }

  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {

  }

  getExpectedData(params) {
    console.log('----- expected data params:', JSON.parse(JSON.stringify(params)));
    if (params.program_id == -1) {
      this.expected_data = { male: [], female: [] };
      return;
    }

    this.http.post('/profile/getExpectedData', { params: params }).subscribe((resp: any) => {
      // console.log('>>>>> get expected data: ', resp);
      this.expected_data = resp.result;
      console.log('>>>>> get expected data: ', this.expected_data);
    })
  }

  getTopThreeData() {
    if (this.first_program == undefined || this.first_program.id == undefined || this.first_program.id == -1) {
      this.top_results = { male: [], female: [] };
      return;
    }

    this.http.get('/profile/getTopThreeData?program_id=' + this.first_program.id).subscribe((resp: any) => {
      console.log('>>>>> get top three data: ', resp);
      this.top_results = resp.result;
    })
  }

}
