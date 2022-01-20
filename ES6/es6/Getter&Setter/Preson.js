class Preson {
    constructor(name) {
        this.name = name;
    }

    setter(name) {
        this.name = name;
    }

    getter() {
        return this.name;
    }

    walk(){
        console.log("nguoi nay co the di voi van toc 5 km/h");
    }
}

export {Preson};