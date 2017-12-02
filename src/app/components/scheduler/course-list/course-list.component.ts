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
  courseitems:{};
  hasLecs:{};
  hasLabs:{};
  hasDgds:{};
  hasTuts:{};
  selectedObj: Course;
  

  results:Object[]; //This is just for debugging

   // Function for printing the result of an api query
   updateComponent(data) {
    this.results = data;
    console.log(this.results);
  }

  // Creates a StudentCourse object to add to SemesterSchedule
  selectItem(name:string,code:string,section:string, type:string,section_id:number) {
    let courseItemsToAdd = [];
    for (let item of this.courseitems[section_id]) {
      if (item.type === type) {
        courseItemsToAdd.push(item);
      }
    }
    let newCourse = new StudentCourse(name,code,section,type,courseItemsToAdd);
    console.log(newCourse);
    this.courseDataService.addCourse(newCourse);
  }

  // Loads the sections for a selected course
  updateSections(data:Section[]) {
    this.sections = data.map(item => new Section(item));
    // Find CourseItems for each section
    for (let sec of this.sections) {
      this.apiRequestsService.getAllCourseItemsBySection(this.updateCourseItems.bind(this),sec.getId());
    }
  }

  // Loads all course items for a section
  updateCourseItems(data:CourseItem[]) {
    var newdata = data.map(item=>new CourseItem(item));
    if (newdata.length > 0 ) {
      this.courseitems[newdata[0].getSectionId()] = newdata;
      for (var item of newdata) {
        if (item.getType() === 'LEC') {
          this.hasLecs[item.getSectionId()] = true;
          this.hasLecs['total'] = true;
        } else if (item.getType() === 'LAB') {
          this.hasLabs[item.getSectionId()] = true;
          this.hasLabs['total'] = true;
        } else if (item.getType() === 'DGD') {
          this.hasDgds[item.getSectionId()] = true;
          this.hasDgds['total'] = true;
        } else if (item.getType() === 'TUT') {
          this.hasTuts[item.getSectionId()] = true;
          this.hasTuts['total'] = true;
        }
      }
    }
  }

  // Callback for initial populating of course list from database
  addCoursesToArray(courses){
    this.courses = courses.map(item => new Course(item));
  }

  constructor(private apiRequestsService: ApiRequestsService
    ,private courseDataService: CourseDataService
  ) {

    // Populate courselist from databaase
    this.apiRequestsService.getAllCourses(this.addCoursesToArray.bind(this));

    this.sections = [];
  }


  ngOnInit() {
  }
  selectCourse(course: Course):void{
    this.selectedObj = course;
    this.sections = [];
    this.courseitems = {};
    this.hasLecs = {};
    this.hasLabs = {};
    this.hasDgds = {};
    this.hasTuts = {};
    this.apiRequestsService.getSectionsByCourse(this.updateSections.bind(this),this.selectedObj.getId());

  }
}
