import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../common/common.module';
import { ResponsiveModule } from 'ngx-responsive';

import { CoreModule } from '../core/core.module';

import { ProgramDesignsComponent } from './components/main.component';
// import { StrengthStandardsExerciseTable } from './components/exercise-table/exercise-table.component';

@NgModule({
  declarations: [
    ProgramDesignsComponent,
    // StrengthStandardsExerciseTable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    NgbModule,
    ResponsiveModule.forRoot(),
    CommonComponentsModule,
  ],
  providers: [],
})
export class ProgramDesignsModule { }
