import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkoutDetailComponent } from './components/main.component';
import { WorkoutDetailUpcomingComponent } from './components/workout-detail/workout-detail-upcoming.component';
import { WorkoutDetailProgressComponent } from './components/workout-detail/workout-detail-progress.component';
import { WorkoutDetailCompleteComponent } from './components/workout-detail/workout-detail-complete.component';
import { NumbericSliderPurpleComponent } from './components/workout-detail/numberic-slider-purple.component';
import { NumbericSliderOrangeComponent } from './components/workout-detail/numberic-slider-orange.component';
import { NumbericSliderRedComponent } from './components/workout-detail/numberic-slider-red.component';
import { CoreModule } from '../core/core.module';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    WorkoutDetailComponent,
    WorkoutDetailUpcomingComponent,
    WorkoutDetailProgressComponent,
    WorkoutDetailCompleteComponent,
    NumbericSliderPurpleComponent,
    NumbericSliderOrangeComponent,
    NumbericSliderRedComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UiSwitchModule,
    Ng5SliderModule
  ],
  providers: [
    
  ],
})
export class WorkoutDetailModule { }
