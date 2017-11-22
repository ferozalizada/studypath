export class Course {
    private code:string; //example: CSI2110
    private section:string; //example: B00
    private type:string;
    private day:string;
    private startHour:string;
    private endHour:string;
    private location:string;

    constructor(){ 
        //...
    }

    setCode(code:string){
        this.code = code;
    }

    setSection(section:string){
        this.section = section;
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

    getFullCode(){
        return this.code + " - " + this.section;
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
    
}