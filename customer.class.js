class Customer {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.dateOfBirth = faker.date.between("1970-01-01", "1999-07-31").toLocaleString().split(',')[0];
        this.sex = faker.random.boolean();//true for male
    }
}