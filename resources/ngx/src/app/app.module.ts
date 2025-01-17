
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';
import { PlanBuilderModule } from './plan/plan.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContactsModule } from './contacts/contacts.module';
import { ApplicationService } from './core/services/application.service';
import { AuthInterceptor } from './core/services/auth.interceptor';
import { ExperienceBankModule } from './experience-bank/experience-bank.module';
import { StrengthStandardsModule } from './strength-standards/strength-standards.module';
import { ProgramDesignsModule } from './program-designs/program-designs.module';
import { WorkoutLogModule } from './workout-log/workout-log.module';
import { WorkoutDetailModule } from './workout-detail/workout-detail.module';
import { InterviewModule } from './interview/interview.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ReviewsModule } from './reviews/reviews.module';
import { MockDataService } from './core/services/mock-data.service';
import { MessageService } from './core/services/data.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ProfileModule,
    PlanBuilderModule,
    ExperienceBankModule,
    StrengthStandardsModule,
    ProgramDesignsModule,
    WorkoutLogModule,
    WorkoutDetailModule,
    DashboardModule,
    ContactsModule,
    InterviewModule,
    NewsfeedModule,
    ReviewsModule,
    NgxDropzoneModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],
  providers: [
    ApplicationService,
    MockDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    [MessageService]
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
