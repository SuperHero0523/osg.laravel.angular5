import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Ng5SliderModule } from 'ng5-slider';
import { ProgressiveOverloadGraphComponent } from './components/progressive-overload-graph/progressive-overload-graph.component';
import { ProgramDesignComponent } from './components/program-design/program-design.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { ResponsiveModule } from 'ngx-responsive';
import { SimpleModalModule } from 'ngx-simple-modal';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewComponent } from './components/review/review.component';

let components = [
  ProgressiveOverloadGraphComponent,
  ProgramDesignComponent,
  ReviewComponent
]
@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiSwitchModule,
    Ng5SliderModule,
    SimpleModalModule,
    CarouselModule,
    ResponsiveModule.forRoot(),
    NgxSpinnerModule,
    NgbModule
  ],
  exports: components,
  providers: [],
})
export class CommonComponentsModule { }
