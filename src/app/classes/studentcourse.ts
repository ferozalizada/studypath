import { CourseItem } from './courseitem';

export class StudentCourse {
    private name:string;
    private code:string;
    private section:string;
    private type:string;
    private course_item_ids:CourseItem[];
    
    constructor(name:string, code:string, section:string, type:string, courseItemIds:CourseItem[]) {
        this.name = name;
        this.section = section;
        this.code = code;
        this.type = type;
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

    getType() {
        return this.type;
    }
    
    getCourseItemIds() {
        return this.course_item_ids;
    }
    
    
}