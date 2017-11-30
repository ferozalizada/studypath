import { Component, OnInit } from '@angular/core';


import { SemesterViewComponent } from './semester-view/semester-view.component';
import { SemesterCourseViewComponent } from './semester-course-view/semester-course-view.component';
import { SemesterDropdownComponent } from './semester-dropdown/semester-dropdown.component';

@Component({
  selector: 'app-semester-info',
  templateUrl: './semester-info.component.html',
  styleUrls: ['./semester-info.component.css']
})
export class SemesterInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
