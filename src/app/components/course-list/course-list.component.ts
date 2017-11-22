import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { Course } from '../../classes/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses:Course[];

  constructor(private courseDataService: CourseDataService) {
    this.courses = courseDataService.getAllCourses();
  }

  ngOnInit() {
  }

}
