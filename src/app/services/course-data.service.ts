import { Injectable } from '@angular/core';
import { Course } from '../classes/course';


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

    c1.setId(10);
    c1.setCode('B00');
    c1.setName('Lecture');
    c1.setDescription('Henderson Residence 013');
    this.courses.push(c1);

    var c1 = new Course();
    c1.setCode('B001');
    c1.setDescription('Tabaret at 13;00');
    c1.setId(1);
    c1.setName('ADM1101');
    this.courses.push(c1);
  }

  fetchAllCourses(){
    //Later real data pulled from database will be put into courses array
    //Note: enter manually data in database, both english and french version
  }

  getAllCourses(){
    return this.courses;
  }

}
