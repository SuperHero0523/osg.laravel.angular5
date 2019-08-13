import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkoutLogComponent } from './components/main.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    WorkoutLogComponent,
    WorkoutListComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class WorkoutLogModule { }
