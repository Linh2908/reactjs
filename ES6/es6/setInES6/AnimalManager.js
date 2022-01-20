import { Animal } from "./Animal.js"
class AnimalManager {
    constructor() {
        this.listArr = [];
    }

    addAnimal(animal) {
        this.listArr.push(animal);
    }
    //kiem tra da co dong  theo ma
    checkAnimal(id) {
        let check = false;
        let pos = -1;
        this.listArr.forEach((animal, index) => {
            if (animal.id === id) {
                check = true;
                pos = index;
            }
        })
        return {
            check: check,
            index: pos
        }
    }
    // xoa dong vat theo ma
    delAnimal(id) {
        if (this.checkAnimal(id).check) {
            let pos = this.checkAnimal(id).index;
            // console.log("ok");
            this.listArr.splice(pos, 1);
        }
    }

    output () {
        this.listArr.forEach(animal => {
            console.log(animal);
        });
    }
}


const list1 = new AnimalManager();
list1.addAnimal(new Animal(1, "tiger", "cat"));
list1.addAnimal(new Animal(3, "dog", "dog"));
console.log(list1.listArr);
// list1.delAnimal(1);
list1.output();
