export class CalendarItem {
    private name:string;
    private code:string;
    private type:string;
    private section:string;
    private startHour:string;
    private endHour:string;
    private day:string;
    private instructor:string;
    private location:string;

    constructor(
        name:string,
        code:string,
        type:string,
        section:string,
        startHour:string,
        endHour:string,
        day:string,
        instructor:string,
        location:string
    ) {
        this.name = name;
        this.code = code;
        this.type = type;
        this.section = section;
        this.startHour = startHour;
        this.endHour = endHour;
        this.day = day;
        this.instructor = instructor;
        this.location = location;
    }

    
    setCode(code:string){
        this.code = code;
    }
    
    setName(name:string) {
        this.name = name;
    }

    setType(type:string) {
        this.type = type;
    }

    setSection(section:string) {
        this.section = section;
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

    getStartHour(){
        return this.startHour;
    }

    getEndHour() {
        return this.endHour;
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


}