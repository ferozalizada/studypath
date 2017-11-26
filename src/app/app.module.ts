import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDataService } from './services/course-data.service';
import { SemesterDropdownComponent } from './components/semester-dropdown/semester-dropdown.component';
import { SemesterListService } from './services/semester-list.service';
import { SemesterViewComponent } from './components/semester-view/semester-view.component';
import { SemesterCourseViewComponent } from './components/semester-course-view/semester-course-view.component';
import { ApiRequestsService } from './services/api-requests.service';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CourseListComponent,
    SemesterDropdownComponent,
    SemesterViewComponent,
    SemesterCourseViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CourseDataService,
    SemesterListService,
    ApiRequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
