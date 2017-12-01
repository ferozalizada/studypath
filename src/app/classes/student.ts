import { StudentCourse } from './studentcourse';
import { SemesterSchedule } from './semesterschedule';
import { CourseItem } from './courseitem';

export class Student {
    
    private id:number;number;
    private firstName:string;
    private lastName:string;
    private startYear:string;
    private endYear:string;
    private schedules:{};
    
    constructor(id:number, firstName:string, lastName:string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.schedules = {};
    }
    
    addSemester (schedName:string) {
        this.schedules[schedName] = new SemesterSchedule();
    }
    
    addCourseToSemester (schedName:string, courseitems:StudentCourse[]) {
        this.schedules[schedName].addCourse(courseitems);
    }
    
    removeCourseFromSemester (schedName:string, course_id:number) {
        this.schedules[schedName].removeCourse(course_id);
    }
    
    getCoursesFromSemester (schedName:string) {
        return this.schedules[schedName].getCourses();
    }
    
    setId (id:number) {
        this.id = id;
    }
    
    setFirstName(fn:string) {
        this.firstName = fn;
    }
    
    setLastName (ln: string) {
        this.lastName = ln;
    }
    
    setStartYear (sy:string) {
        this.startYear = sy;
    }
    
    setEndYear (ey:string) {
        this.endYear = ey;
    }
    
    getId() {
        return this.id;
    }
    
    getFirstName() {
        return this.firstName;
    }
    
    getLastName() {
        return this.lastName;
    }
    
    getStartYear() {
        return this.startYear;
    }
    
    getEndYear() {
        return this.endYear;
    }
    
}