import { Component, OnInit } from '@angular/core';

import { Course } from '../../../classes/course';
import { CourseItem } from '../../../classes/courseitem';
import { Section } from '../../../classes/section';
import { Student } from '../../../classes/student';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { Semester } from '../../../classes/semester';

import { StudentCourse } from '../../../classes/studentcourse';

import { CourseDataService } from '../../../services/course-data.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses:Course[];
  sections:Section[];

  lectures:{};
  labs:{};
  dgds:{};

  results:Section[];
  test:String;
  selectedObj: Course;
  


  /*constructor(private courseDataService: CourseDataService) {
    this.courses = courseDataService.getAllCourses();
  }*/

  
  updateComponent(data) {
    this.results = data;
    console.log(this.results);
    /* If console logs 'undefined' or an empty array its just because
       your database has no results for the given query */
  }

  updateSections(data:Section[]) {
    //This stuff is required
    let sectionsArr = data;
    this.sections = sectionsArr.map(item => new Section(item));
    //This for loop is also broken as hell
    for (let sec of this.sections) {
        this.apiRequestsService.getCourseItemsBySection(this.updateSectionLectures.bind(this),sec.getId(),'LEC');
    }
  }

  //Fucking broken as hell function
  updateSectionLectures(data:CourseItem[]) {
    if (data.length > 0) {
      let lecArr = data;
      let lecturesMapped = lecArr.map(item => new CourseItem(item));
      this.lectures[lecturesMapped[0].getSectionId()] = lecturesMapped;
    }
  }

  addCoursesToArray(courses){
    this.courses = courses.map(item => new Course(item));
  }

  constructor(private apiRequestsService: ApiRequestsService
    ,private courseDataService: CourseDataService
  ) {

    //courseDataService.initCoursesArray();
    this.apiRequestsService.getAllCourses(this.addCoursesToArray.bind(this));

    // Example of usage of semester class within student
    let nick = new Student(7,"Nick","Molinari");
    nick.addSemester("Fall2014");
    let courseA = new StudentCourse('Math','MAT1312','B',[5,6]);
    let courseB = new StudentCourse('Software Eng','SEG2105','A',[1,2]);
    nick.addCourseToSemester("Fall2014",courseA);
    nick.addCourseToSemester("Fall2014",courseB);
    console.log(nick.getCoursesFromSemester("Fall2014")); // Returns an array of all courses for Fall 2014
    nick.removeCourseFromSemester("Fall2014",courseB);
    console.log(nick.getCoursesFromSemester("Fall2014"));
    
    
    
    
    
    this.apiRequestsService.getSectionsByCourse(this.updateComponent.bind(this),1);
    
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
    this.sections = [];
    this.lectures = {};

  }

  //this.sections = [];


  ngOnInit() {
  }
  selectCourse(course: Course):void{
    this.selectedObj = course;
    console.log("Selected Obj's code is: " + this.selectedObj.getCode());

    this.apiRequestsService.getSectionsByCourse(this.updateSections.bind(this),this.selectedObj.getId());

  }
}
