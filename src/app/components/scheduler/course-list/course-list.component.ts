import { Component, OnInit } from '@angular/core';

import { Course } from '../../../classes/course';
import { Section } from '../../../classes/section';
import { Student } from '../../../classes/student';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { Semester } from '../../../classes/semester';

import { StudentCourse } from '../../../classes/studentcourse';

import { CourseDataService } from '../../../services/course-data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses:Course[];

  results:Section[];
  test:String;


  /*constructor(private courseDataService: CourseDataService) {
    this.courses = courseDataService.getAllCourses();
  }*/

  
  updateComponent(data) {
    this.results = data;
    console.log(this.results);
    /* If console logs 'undefined' or an empty array its just because
       your database has no results for the given query */
  }

  constructor(private apiRequestsService: ApiRequestsService) {
    
    // Example of usage of semester class within student
    
    /*
    let nick = new Student(7,"Nick","Molinari");
    nick.addSemester("Fall2014");
    nick.addCourseToSemester("Fall2014", 12);
    nick.addCourseToSemester("Fall2014", 15);
    console.log(nick.getCoursesFromSemester("Fall2014"));
    nick.removeCourseFromSemester("Fall2014",12);
    console.log(nick.getCoursesFromSemester("Fall2014"));
    */
    
    let nick = new Student(7,"Nick","Molinari");
    nick.addSemester("Fall2014");
    let newCourse = new StudentCourse('Math','MAT1312','B',[5,6]);
    nick.addCourseToSemester("Fall2014",newCourse);
    console.log(nick.getCoursesFromSemester("Fall2014"));
    
    
    //this.apiRequestsService.getSectionsByCourse(this.updateComponent.bind(this),1);
    
    //console.log("Checkpoint 1");
    
    //this.apiRequestsService.getCourseItemsBySection(this.updateComponent.bind(this),1,"LAB");
    
    /*
    this.apiRequestsService.getAllStudents(this.updateComponent.bind(this));
    this.apiRequestsService.getAllCourses(this.updateComponent.bind(this));
    this.apiRequestsService.getAllSections(this.updateComponent.bind(this));
    this.apiRequestsService.getAllCourseItems(this.updateComponent.bind(this));
    
    
    this.apiRequestsService.getCourseItemsBySection(this.updateComponent.bind(this),0,"LEC");
    */
    
    //this.apiRequestsService.getStudentById(this.updateComponent.bind(this),10);
    
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
