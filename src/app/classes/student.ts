// This is a helper class contained within the Student class
// Keeps track of what courses the student has scheduled for a specific semester
class SemesterSchedule {
    private courses:number[];
    
    constructor() {
        this.courses = [];
    }
    
    addCourse(course_id:number) {
        this.courses.push(course_id);
    }
    
    removeCourse(course_id:number) {
        var idx = this.courses.indexOf(course_id);
        if (idx != -1) {
            this.courses.splice(idx,1);
        }
    }
    
    getCourses() {
        return this.courses;
    }
}
    
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
    
    addSemester (key:string) {
        this.schedules[key] = new SemesterSchedule();
    }
    
    addCourseToSemester (key:string, course_id:number) {
        this.schedules[key].addCourse(course_id);
    }
    
    removeCourseFromSemester (key:string, course_id:number) {
        this.schedules[key].removeCourse(course_id);
    }
    
    getCoursesFromSemester (key:string) {
        return this.schedules[key].getCourses();
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