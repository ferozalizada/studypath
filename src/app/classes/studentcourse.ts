export class StudentCourse {
    private name:string;
    private code:string;
    private section:string;
    private course_item_ids:number[];
    
    constructor(name:string, code:string, section:string, courseItemIds:number[]) {
        this.name = name;
        this.section = section;
        this.code = code;
        this.course_item_ids = courseItemIds;
    }
    
    getName() {
        return this.name;
    }
        
    getCode() {
        return this.code;
    }
    
    getSection() {
        return this.section;
    }
    
    getFullCode() {
        return this.code + this.section;
    }
    
    getCourseItemIds() {
        return this.course_item_ids;
    }
    
    
}