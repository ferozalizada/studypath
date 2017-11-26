import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { Course } from '../../classes/course';
import { ApiRequestsService } from '../../services/api-requests.service';
import { Semester } from '../../classes/semester';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses:Course[];
  results:String[];

  /*constructor(private courseDataService: CourseDataService) {
    this.courses = courseDataService.getAllCourses();
  }*/

  constructor(private apiRequestsService: ApiRequestsService) {
    //apiRequestsService.getAllCourses();
    var semester = new Semester();
    semester.setSeason('Fall');
    semester.setYear(2017);

    //apiRequestsService.addSemester(semester);
    apiRequestsService.getAllSemesters();
    //console.log(this.results);
  }

  ngOnInit() {
  }

}
