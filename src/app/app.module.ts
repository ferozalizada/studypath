//Adds all the modules required for angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

//import { AppComponent } from './app.component';
//import { CalendarComponent } from './components/calendar/calendar.component';
//import { CourseListComponent } from './components/course-list/course-list.component';
//import { CourseDataService } from './services/course-data.service';
//import { SemesterDropdownComponent } from './components/semester-dropdown/semester-dropdown.component';

//Imports all the required services
import { CourseDataService } from './services/course-data.service';

import { SemesterListService } from './services/semester-list.service';
import { ApiRequestsService } from './services/api-requests.service';

//Imports the required components
import { AppComponent } from './app.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { CalendarComponent } from './components/scheduler/calendar/calendar.component';
import { CourseListComponent } from './components/scheduler/course-list/course-list.component';

import { SemesterInfoComponent } from './components/semester-info/semester-info.component';

import { SemesterViewComponent } from './components/semester-info/semester-view/semester-view.component';
import { SemesterCourseViewComponent } from './components/semester-info/semester-course-view/semester-course-view.component';
import { SemesterDropdownComponent } from './components/semester-info/semester-dropdown/semester-dropdown.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CourseListComponent,
    SemesterDropdownComponent,
    SemesterViewComponent,
    SemesterCourseViewComponent,
    NavbarComponent,
    SchedulerComponent,
    SemesterInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    CourseDataService,
    SemesterListService,
    ApiRequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
