class Car
{
    constructor(name)
    {
        this.name = name;
    }
    drive()
    {
        console.log("Driving the car" + this.name);
    }

    printDetailsCar()
    {
        console.log("Details of the car" + this.name);
    }
}

let tesla = new Car("tesla model v3");
tesla.drive();