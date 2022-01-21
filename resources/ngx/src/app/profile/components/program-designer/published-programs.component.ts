import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import {ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { MessageService } from '../../../core/services/data.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'osg-program-designer-published-programs',
  templateUrl: './published-programs.component.html'
})
export class ProgramDesignerPublishedProgramsComponent implements OnInit{

  showingPrograms = [];
  cur_page = 0;

  swal: SweetAlert = _swal as any;

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

  get week_start_date() {
    return this.dataService.week_start_date;
  }
  set week_start_date(val) {
    this.dataService.week_start_date = val;
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

  get first_program() {
    return this.dataService.first_program;
  }
  set first_program(val) {
    this.dataService.first_program = val;
    this.dataService.first_program_subject.next('publish');
  }

  get published_programs() {
    return this.dataService.published_programs;
  }
  set published_programs(val) {
    this.dataService.published_programs = val;
    this.dataService.published_programs_subject.next();
  }

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  get profile_user() {
    return this.dataService.profile_user;
  }


  @Input() applicationUser: ApplicationUser;

  constructor(private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private http: HttpClient,
    private dataService: DataService,
    public router: ActivatedRoute) { }

  ngOnInit(): void {

    let url = 'program/restapi?info=get-programs'

    if (this.profile_user != -1)
      url += '&user_id=' + this.profile_user;

    this.http.post(url, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
    .subscribe(resp => {
      console.log('published programs = ', resp);
      this.published_programs = resp['data'];
      for (var i = 0; i < 5; i ++) {
        if (this.published_programs[i]) {
          this.showingPrograms.push(this.published_programs[i]);
        } else {
          this.showingPrograms.push([]);
        }
      }
    });
  }

  onPrevPage() {
    if (this.cur_page > 0) {
      this.cur_page--;
      this.showingPrograms = [];
      for (var i = 0; i < 5; i++) {
        if (this.published_programs[i+this.cur_page*5]) {
          this.showingPrograms.push(this.published_programs[i+this.cur_page*5]);
        } else {
          this.showingPrograms.push([]);
        }
      }
    }
  }

  onNextPage() {
    if (this.cur_page < Math.floor((this.published_programs.length - 1) / 5)) {
      this.cur_page++;
      this.showingPrograms = [];
      for (var i = 0; i < 5; i++) {
        if (this.published_programs[i + this.cur_page * 5]) {
          this.showingPrograms.push(this.published_programs[i + this.cur_page * 5]);
        } else {
          this.showingPrograms.push([]);
        }
      }
    }
  }

  onSelectProgram(ind) {
    if (this.first_program != undefined && this.first_program.id != undefined && this.first_program.id == this.showingPrograms[ind].id)
      return;

    this.first_program = this.showingPrograms[ind];
    console.log(">>> first program changed on the published programs: ", this.first_program);

    document.getElementById("training-program").scrollIntoView();
  }

  onDeleteProgram = (index) => {
    console.log('>>>> index: ', index);
    // get program name firstly
    let delId = this.showingPrograms[index].id;
    let programName = this.showingPrograms[index].name;

    // show the popup to ask the user to want to delete really
    this.swal({
      title: 'Confirmation',
      text: 'Are you sure you want to delete ' + programName + '?',
      icon: 'warning',
      buttons: {
        yes: { text: 'Yes', className: 'btn btn-success' },
        no: { text: 'No', className: 'btn btn-warning' }
      }
    }).then((value) => {
      console.log('>>>>> ', value)
      if (value == 'yes') {
        this.spinner.show();
        this.http.post('program/restapi?info=delete-published-program', {program_id: delId}, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        })
        .subscribe((resp: any) => {
          console.log('>>> deleting published program result: ', resp);
          if (resp.success) {
            // get next program index of del program
            let nextIndex = -1;
            let delIndex = this.published_programs.map((val, idx) => [val, idx])
                                                .filter(tuple => tuple[0].id == delId)
                                                .map(tuple => tuple[1])[0];
            if (delIndex + 1 < this.published_programs.length)
              nextIndex = delIndex;
            else if (delIndex - 1 >= 0)
              nextIndex = delIndex - 1;

            // delete program from saving programs
            this.published_programs = this.published_programs.filter(el => el.id != delId);
            console.log('>>> published program: ', this.published_programs);

            // delete program from showing programs
            this.showingPrograms = this.showingPrograms.filter(el => el.id == undefined || el.id != delId);
            console.log('>>> showing program: ', this.showingPrograms);

            // reconfigure showing programs
            if (this.showingPrograms[0].id == undefined) {
              this.showingPrograms = [];

              const source = from(this.published_programs);
              const programs = source.pipe(filter((el, i) => i >= this.published_programs.length - 5));
              programs.subscribe(val => this.showingPrograms.push(val));
              console.log(">>>> showingProgram: ", this.showingPrograms);
            } else {
              // get index of first showing program in the saved programs
              let idx = this.published_programs.findIndex(el => el.id == this.showingPrograms[0].id);
              console.log('>>> idx: ', idx);

              // get page index from idx;
              let pageIndex = (idx / 5) as number;
              console.log('>>> pageIndex: ', pageIndex);

              this.showingPrograms = [];
              const source = from(this.published_programs);
              const programs = source.pipe(filter((el, i) => pageIndex * 5 <= i && i < (pageIndex + 1) * 5));
              programs.subscribe(val => this.showingPrograms.push(val));
              console.log(">>>> showingProgram: ", this.showingPrograms);
            }

            for (let i = this.showingPrograms.length; i < 5; i++)
              this.showingPrograms.push([]);

            this.spinner.hide();

            let bExistFirstProgram = false;
            const self = this;
            this.published_programs.forEach(program => {
              if (program.id == self.first_program.id)
                bExistFirstProgram = true;
            });

            // if first program was deleted
            if (!bExistFirstProgram) {
              nextIndex = Math.max(0, nextIndex);
              this.first_program = this.published_programs[nextIndex];
            }
          }
        });
      }
    });
  }
}
