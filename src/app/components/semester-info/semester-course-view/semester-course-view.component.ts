import { Component, OnInit } from '@angular/core';
import { Course } from '../../../classes/course';
import { CourseDataService } from '../../../services/course-data.service';

@Component({
  selector: 'app-semester-course-view',
  templateUrl: './semester-course-view.component.html',
  styleUrls: ['./semester-course-view.component.css']
})
export class SemesterCourseViewComponent implements OnInit {
  courseList : Course[];

  constructor( private courseDataService: CourseDataService) { 
    //courseDataService.initCoursesArray();
    //this.courseList = courseDataService.getAllCourses();
  }

  ngOnInit() {
  }

}
