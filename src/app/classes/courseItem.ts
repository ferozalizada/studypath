export class CourseItem {
    
    private id:number;
    private section_id:number;
    private day:string;
    private startHour:string;
    private endHour:string;
    private type:string;
    private instructor:string;
    private location:string;
    
    constructor(obj:CourseItem){
        this.id = obj.id;
        this.section_id = obj.id;
        this.day = obj.day;
        this.startHour = obj.startHour;
        this.endHour = obj.endHour;
        this.type = obj.type;
        this.instructor = obj.instructor;
        this.location = obj.location;
    }
    
    setId (id:number) {
        this.id = id;
    }
    
    setSectionId(id:number)  {
        this.section_id = id;
    }

    setType(type:string){
        this.type = type;
    }

    setDay(day:string){
        this.day = day;
    }

    setStartHour(startHour:string){
        this.startHour = startHour;
    }

    setEndHour(endHour:string){
        this.endHour = endHour;
    }

    setLocation(location:string){
        this.location = location;
    }
    
    setInstructor(instructor:string) {
        this.instructor = instructor;
    }
    
    getId() {
        return this.id;
    }
    
    getSectionId() {
        return this.section_id;
    }

    getType(){
        return this.type;
    }

    getDay(){
        return this.day;
    }

    getHours(){
        return this.startHour + " - " + this.endHour;
    }

    getLocation(){
        return this.location;
    }
    
    getInstructor() {
        return this.instructor;
    }

}