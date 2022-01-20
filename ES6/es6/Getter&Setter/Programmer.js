import { Preson } from "./Preson.js";

class Programmer extends Preson {
    constructor(name) {
        super(name);
    }

    setLang(lang) {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }
}

let prog1 = new Programmer("Tuan Anh");
prog1.setLang("javascript")
console.log("xin chao" , prog1.getter());
console.log("ban dang code ngon ngu " + prog1.getLang());
