import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoreModule } from '../core/core.module';
import {NgxMaskModule} from 'ngx-mask';
import { ResponsiveModule } from 'ngx-responsive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSiemaModule } from 'ngx-siema';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PlanBuilderComponent } from './components/main.component';
import { PlanBuilderExercisesComponent } from './components/calendar-builder/exercises/exercises.component';
import { PlanBuilderWorkoutsComponent } from './components/calendar-builder/workouts/workouts.component';
import { PlanBuilderCalendarComponent } from './components/calendar-builder/calendar/calendar.component';
import { CalendarBuilderComponent } from './components/calendar-builder/main.component';
import { ProgressionBuilderComponent } from './components/progression-builder/main.component';
// tslint:disable-next-line: max-line-length
import { ProgressionBuilderTrainingProgramComponent } from './components/progression-builder/training-program/training-program.component';
import {ReactiveFormsModule} from "@angular/forms";

import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { CommonComponentsModule } from '../common/common.module';

@NgModule({
  declarations: [
    PlanBuilderComponent,
    CalendarBuilderComponent,
    PlanBuilderExercisesComponent,
    PlanBuilderWorkoutsComponent,
    PlanBuilderCalendarComponent,

    ProgressionBuilderComponent,
    ProgressionBuilderTrainingProgramComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CarouselModule,
    ResponsiveModule,
    NgbModule,
    NgxSiemaModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    CommonComponentsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlanBuilderModule { }
