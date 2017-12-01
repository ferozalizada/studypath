/// I dont think we need this class at all
// Semesters don't really have unique properties that need to be stored

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