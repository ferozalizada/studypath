import { Injectable } from '@angular/core';
import { Course } from '../classes/course';

/*
@Injectable()
export class CourseDataService {
  private courses:Course[];

  constructor() { 
    this.courses = [];
    this.initCoursesArray();
  }

  initCoursesArray(){
    //temp function ... to be replaced by fetchAllCourses
    var c1 = new Course();
    var c2 = new Course();
    var c3 = new Course();
    var c4 = new Course();

    c1.setCode('CSI2110');
    c1.setSection('B00');
    c1.setType('Lecture');
    c1.setLocation('Henderson Residence 013');
    c1.setDay('Tuesday');
    c1.setStartHour('10:00');
    c1.setEndHour('11:30');

    c2.setCode('SEG2105');
    c2.setSection('C00');
    c2.setType('Lecture');
    c2.setLocation('Social Science Building 1006');
    c2.setDay('Wednesday');
    c2.setStartHour('10:00');
    c2.setEndHour('11:30');

    c3.setCode('MAT1322');
    c3.setSection('D01');
    c3.setType('Discussion Group');
    c3.setLocation('Fauteux Hall 361');
    c3.setDay('Thursday');
    c3.setStartHour('16:00');
    c3.setEndHour('17:30');

    c4.setCode('CEG2136');
    c4.setSection('B03');
    c4.setType('Laboratory');
    c4.setLocation('Colonel By Hall 302');
    c4.setDay('Monday');
    c4.setStartHour('08:30');
    c4.setEndHour('11:30');

    this.courses.push(c1);
    this.courses.push(c2);
    this.courses.push(c3);
    this.courses.push(c4);
  }

  fetchAllCourses(){
    //Later real data pulled from database will be put into courses array
    //Note: enter manually data in database, both english and french version
  }

  getAllCourses(){
    return this.courses;
  }

}
*/