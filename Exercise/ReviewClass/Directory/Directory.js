class Directory {
    constructor(fullName, phones, emails, address, notes, tags) {
        this.fullName = fullName;
        this.phones = phones;
        this.emails = emails;
        this.address = address;
        this.notes = notes;
        this.tags = tags;
    }

    updateInfo(fullName, phones, emails, address, notes, tags) {
        this.fullName = fullName;
        this.phones = phones;
        this.emails = emails;
        this.address = address;
        this.notes = notes;
        this.tags = tags;
    }

    displayInfo() {
        console.log(`${this.fullName} ${this.phones} ${this.emails} ${this.address} ${this.notes} ${this.tags}`);
    }

    
}