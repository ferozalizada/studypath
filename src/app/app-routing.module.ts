//imports the modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Imports all the components 
import { CalendarComponent } from './components/calendar/calendar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SemesterCourseViewComponent } from './components/semester-course-view/semester-course-view.component';
import { SemesterDropdownComponent } from './components/semester-dropdown/semester-dropdown.component';
import { SemesterViewComponent } from './components/semester-view/semester-view.component';

//Adds the routes the components and provides the http path for them 
const routes: Routes = [
  {
    path : 'course-list',
    component: CourseListComponent,
    outlet: 'aside'
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'semester-course-view',
    component: SemesterCourseViewComponent
  },
  {
    path: 'semester-view',
    component: SemesterViewComponent
  },
  {
    path: 'semester-dropdown',
    component: SemesterDropdownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
