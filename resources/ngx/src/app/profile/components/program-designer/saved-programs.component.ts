import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'osg-program-designer-saved-programs',
  templateUrl: './saved-programs.component.html'
})
export class ProgramDesignerSavedProgramsComponent implements OnInit{

  savedPrograms = [];
  showingPrograms = [];
  cur_page = 0;

  swal: SweetAlert = _swal as any;

  @Input() applicationUser: ApplicationUser;

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.http.post('program/restapi?info=get-saved-programs', {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
    .subscribe(resp => {
      console.log('published programs = ', resp);
      this.savedPrograms = resp['data'];
      for (var i = 0; i < 5; i ++) {
        if (this.savedPrograms[i]) {
          this.showingPrograms.push(this.savedPrograms[i]);
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
        if (this.savedPrograms[i + this.cur_page * 5]) {
          this.showingPrograms.push(this.savedPrograms[i + this.cur_page * 5]);
        } else {
          this.showingPrograms.push([]);
        }
      }
    }
  }

  onNextPage() {
    if(this.cur_page < Math.floor((this.savedPrograms.length-1)/5)) {
      this.cur_page++;
      this.showingPrograms = [];
      for (var i = 0; i < 5; i++) {
        if (this.savedPrograms[i + this.cur_page * 5]) {
          this.showingPrograms.push(this.savedPrograms[i + this.cur_page * 5]);
        } else {
          this.showingPrograms.push([]);
        }
      }
    }
  }

  setProgram(ind) {
    this.dataService.program = this.showingPrograms[ind];
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
        this.http.post('program/restapi?info=delete-saved-program', {program_id: delId}, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        })
        .subscribe((resp: any) => {
          console.log('>>> deleting saved program result: ', resp);
          if (resp.success) {
            // delete program from saving programs
            this.savedPrograms = this.savedPrograms.filter(el => el.id != delId);
            console.log('>>> saved program: ', this.savedPrograms);

            // delete program from showing programs
            this.showingPrograms = this.showingPrograms.filter(el => el.id == undefined || el.id != delId);
            console.log('>>> showing program: ', this.showingPrograms);

            // reconfigure showing programs
            if (this.showingPrograms[0].id == undefined) {
              this.showingPrograms = [];

              const source = from(this.savedPrograms);
              const programs = source.pipe(filter((el, i) => i >= this.savedPrograms.length - 5));
              programs.subscribe(val => this.showingPrograms.push(val));
              console.log(">>>> showingProgram: ", this.showingPrograms);
            } else {
              // get index of first showing program in the saved programs
              let idx = this.savedPrograms.findIndex(el => el.id == this.showingPrograms[0].id);
              console.log('>>> idx: ', idx);

              // get page index from idx;
              let pageIndex = (idx / 5) as number;
              console.log('>>> pageIndex: ', pageIndex);

              this.showingPrograms = [];
              const source = from(this.savedPrograms);
              const programs = source.pipe(filter((el, i) => pageIndex * 5 <= i && i < (pageIndex + 1) * 5));
              programs.subscribe(val => this.showingPrograms.push(val));
              console.log(">>>> showingProgram: ", this.showingPrograms);
            }

            for (let i = this.showingPrograms.length; i < 5; i++)
              this.showingPrograms.push([]);
          }
        });
      }
    });
  }
}
