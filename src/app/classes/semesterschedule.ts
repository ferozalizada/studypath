// This is a helper class contained within the Student class
// Keeps track of what courses the student has scheduled for a specific semester

import { StudentCourse } from './studentcourse';

export class SemesterSchedule {
    private courses:StudentCourse[];
    
    constructor() {
        this.courses = [];
    }
    
    addCourse(course:StudentCourse) {
        this.courses.push(course);
    }
    
    removeCourse(course_id:number) {
        //..
    }
    
    getCourses() {
        return this.courses;
    }
}