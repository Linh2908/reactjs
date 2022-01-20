import {Information} from "./Information.js"

class Geometry extends Information {
    constructor(discription, length){
        super(discription);
        this.length = length;
    }

}

let squat = new Geometry("hinh vuong", 12);

console.log(squat.calculate(squat.length));