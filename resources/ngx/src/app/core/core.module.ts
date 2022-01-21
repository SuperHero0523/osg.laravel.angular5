import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsFeedComponent } from './components/news-feed/news-feed-component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxDropdownComponent } from './components/checkbox-dropdown/checkbox-dropdown.component';
import { EnterInformation } from './components/enter-information/enter-information.component';

import { ResponsiveModule } from 'ngx-responsive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSpinnerModule } from "ngx-spinner";
import { MentionModule } from 'angular-mentions';
import { CommonComponentsModule } from '../common/common.module';

let components = [
    NavigationComponent,
    FooterComponent,
    NewsFeedComponent,
    GetStartedComponent,
    NotificationsComponent,
    GaugeComponent,
    SelectComponent,
    CheckboxDropdownComponent,
    EnterInformation,
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    RouterModule,
    CarouselModule,
    NgbModule,
    FormsModule,
    ResponsiveModule.forRoot(),
    NgxDropzoneModule,
    NgxSpinnerModule,
    MentionModule,
    CommonComponentsModule
  ],
  exports: components,
  providers: [],
})
export class CoreModule { }
