export class Semester {
    private season:string;
    private year:number;
    
    constructor(){
        //...
    }

    getSeason(){
        return this.season;
    }

    getYear(){
        return this.year;
    }

    setSeason(season:string){
        this.season = season;
    }

    setYear(year:number){
        this.year = year;
    }
}