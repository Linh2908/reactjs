import {Kids} from "./Kids.js";

let kids = [
    new Kids(1,"a", 3),
    new Kids(2, "b", 4),
    new Kids(3, "c", 8),
    new Kids(5, "d", 5),
    new Kids(6, "e", 2),
    new Kids(7, "j", 10),
    new Kids(8, "h", 12)
]

// console.log(kids);

// be mau giao
let mauGiao = [];

kids.forEach(baby => {
    if(baby.age < 6) {
        mauGiao.push(baby);
    }
});

console.log(mauGiao);

const kids2 = kids.filter(kid => kid.age < 12 && kid.age >= 6).map(kid => ({
    id : kid.id,
    name : kid.name
}))
console.log(kids2);
console.log([...[...'...']]);