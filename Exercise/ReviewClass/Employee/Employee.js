class Employee {
    constructor( id,lastName, firstName, salary ) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.salary = salary;
    }

    getFullName() {
        return this.firstName + this.lastName; 
    }

    getSalary() {
        return this.salary;
    }

    getAnnualSalary() {
        return this.getSalary()*12;
    }

    raiseSalary( percent ) {
        return this.salary*percent;
    }
}