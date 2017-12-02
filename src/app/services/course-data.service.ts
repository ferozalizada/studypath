import { Injectable } from '@angular/core';
import { Course } from '../classes/course';
import { ApiRequestsService } from './api-requests.service';


@Injectable()
export class CourseDataService {
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
    console.log(this.courses);
  }

  getAllCourses(){
    return this.courses;
  }

}
