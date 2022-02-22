class ParttimeEmployee extends Employee{
    constructor(id,lastName,firstName,salary,hourlyWage) {
        super(id,lastName,firstName, salary);
        this.hourlyWage = hourlyWage;
    }

    checkIn(month,hour) {
        return {
            month : month,
            hour: hour
        }
    }

    getSalary(month,hour) {
        return this.checkIn(month,hour).hour*this.hourlyWage;
    }

    
}