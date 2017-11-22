import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDataService } from './services/course-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
