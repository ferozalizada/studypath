import { Component, OnInit } from '@angular/core';
//import { CourseDataService } from '../../services/course-data.service';
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
  results = [];
  test:String;

  /*constructor(private courseDataService: CourseDataService) {
    this.courses = courseDataService.getAllCourses();
  }*/
  
  updateComponent(data) {
    this.results.push(data);
    console.log("trest: " + this.results);
  }

  constructor(private apiRequestsService: ApiRequestsService) {
    
   // this.apiRequestsService.getAllCourses(this);
    //this.apiRequestsService.getSemester(this);
    
    this.apiRequestsService.getSectionByCourse(this.updateComponent.bind(this));
    
    //this.apiRequestsService.addSemester();
    //apiRequestsService.getUsers();
    var semester = new Semester();
    semester.setSeason('Fall');
    semester.setYear(2017);

    //apiRequestsService.addSemester(semester);
    // apiRequestsService.getAllSemesters();
    //console.log(apiRequestsService.getAllSemesters());
    //console.log(this.results);
    //this.test = apiRequestsService.results;
    //console.log(apiRequestsService.results);
  }

  ngOnInit() {
  }

}
