//imports the modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Imports all the components 
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { CalendarComponent } from './components/scheduler/calendar/calendar.component';
import { CourseListComponent } from './components/scheduler/course-list/course-list.component';

import { SemesterInfoComponent } from './components/semester-info/semester-info.component'; 
import { SemesterCourseViewComponent } from './components/semester-info/semester-course-view/semester-course-view.component';
import { SemesterDropdownComponent } from './components/semester-info/semester-dropdown/semester-dropdown.component';
import { SemesterViewComponent } from './components/semester-info/semester-view/semester-view.component';

//Adds the routes the components and provides the http path for them 
const routes: Routes = [
  {
    path: 'scheduler',
    component: SchedulerComponent,
    children: [
      {
        path: 'course-list',
        component: CourseListComponent,
        outlet: 'course-list-gui'
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        outlet: 'timetable-gui'
      }      
    ]
  },
  {
    path: 'semester-info',
    component: SemesterInfoComponent,
    children: [
      {
        path: 'semester-view',
        component: CourseListComponent,
        outlet: 'sv'
      },
      {
        path: 'semester-course-view',
        component: CalendarComponent,
        outlet: 'scv'
      },
      {
        path: 'semester-dropdown',
        component: SemesterDropdownComponent,
        outlet: 'sd'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
