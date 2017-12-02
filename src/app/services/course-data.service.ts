import { Injectable } from '@angular/core';
import { Course } from '../classes/course';
import { ApiRequestsService } from './api-requests.service';
import { Student } from '../classes/student';
import { StudentCourse } from '../classes/studentcourse';
import { CalendarItem } from '../classes/CalendarItem';

/*
This class basically keeps track of your semester schedule as you create it, and coordinates
information between the course-list-component and the calender-component.

Not yet implemented: Save/load student semester schedules from the database
But when we do implement it, this class is where we will do it from 
*/


@Injectable()
export class CourseDataService {
  private courses:StudentCourse[];
  private context;
  
  constructor (private api: ApiRequestsService) {
    this.courses=[];
  }

  initCourses(context){
    this.context = context;
  }

  getCourses() {
    return this.courses;
  }

  removeCourse(course:StudentCourse) {
    let idx = this.courses.indexOf(course);
    if (idx != -1) {
      this.courses.splice(idx,1);
    }
  }

  addCourse(course:StudentCourse) {

    // Check for same course but different section (cant register in 2 sections of same course!)
    let flagged:StudentCourse;
    for (let courseB of this.courses) {
      if (courseB.getType() === course.getType() && courseB.getCode() === course.getCode() && !flagged) {
        flagged = courseB;
      }
    }
    if (flagged) this.removeCourse(flagged);

    this.courses.push(course);
    this.createItemsFromCourses();
    console.log(this.courses);
  }

  createItemsFromCourses(){
    let items:CalendarItem[];
    items = [];

    for (let course of this.courses) {
      for (let item of course.getCourseItemIds()) { 

        let newItem = new CalendarItem(
          course.getName(),
          course.getCode(),
          course.getType(),
          course.getSection(),
          item.getStartHour(),
          item.getEndHour(),
          item.getDay(),
          item.getInstructor(),
          item.getLocation()
        );
        
        items.push(newItem);
      }
    }

    this.context.items = items;
  }
 
 
  /*
  private courses:Course[];
  private api: ApiRequestsService;

  constructor(api: ApiRequestsService) { 
    this.courses = [];
    this.api = api;
    this.initCoursesArray();
  }
  
  initCoursesArray() {
    this.api.getAllCourses(this.addCoursesToArray.bind(this));
  }

  addCoursesToArray(courses){
    this.courses = courses;
    console.log("Courses:" + this.courses);
  }

  getAllCourses(){
    return this.courses;
  }*/

}
