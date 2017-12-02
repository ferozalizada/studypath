export class Course {
    private id:number;
    private name:string; //example: Data Structures and Algorithms
    private code:string; //example: CSI2110
    private description:string; //

    constructor(obj:Course){ 
        this.id = obj.id;
        this.name = obj.name;
        this.code = obj.code;
        this.description = obj.description;
    }
    
    setId (id:number) {
        this.id = id;
    }

    setCode(code:string){
        this.code = code;
    }
    
    setName(name:string) {
        this.name = name;
    }
    
    setDescription(desc:string) {
        this.description = desc;
    }
    
    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }
    
    getCode() {
        return this.code;
    }
    
    getDescription() {
        return this.description;
    }
    
}