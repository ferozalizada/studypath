export class Section {

    private id:number;
    private course_id:number; //id of course to which the section belongs
    private name:string; //ie. B00

    constructor(obj:Section){ 
        this.id = obj.id;
        this.course_id = obj.course_id;
        this.name = obj.name;
    }

    setId(id:number) {
        this.id = id;
    }
    
    setName(name:string) {
        this.name = name;
    }
    
    setCourseId(id:number){
        this.course_id = id;
    }

    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }
    
    getCourseId() {
        return this.course_id;
    }
    
}