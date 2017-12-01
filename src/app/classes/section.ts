export class Section {

    private id:number;
    private course_id:number; //id of course to which the section belongs
    private name:string; //ie. B00

    constructor(){ 
        //...
    }
    
    setName(name:string) {
        this.name = name;
    }
    
    setCourseId(id:number){
        this.course_id = id;
    }
    
    getName() {
        return this.name;
    }
    
    getCourseId() {
        return this.course_id;
    }
    
}