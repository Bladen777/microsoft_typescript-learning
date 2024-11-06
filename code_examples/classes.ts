interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: "left" | "right"): string;
}


class Car {
    // Properties
    private static numberOfCars: number= 0; // New Static property
    private _make: string;
    private _color: string;
    private _doors: number;


    // Constructor
    constructor(make:string, color:string, doors = 4){
        this._make = make;
        this._color = color;
        if((doors % 2) === 0){
            this._doors = doors;
        } else {
            throw new Error("Doors must be an even number");
        }
        Car.numberOfCars++; // Increments the value of the static Property "number of cars" each time the Class Constructor is Called
    }

    // Accessors
    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make;
    }

    get color() {
        return "the color of the car is " + this._color
    }

    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }

    set doors(doors){
        if((doors % 2) === 0){
            this._doors = doors;
        } else {
            throw new Error("Doors must be an even number");
        }

    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is acceleratubg to ${speed} MPH.`;
    }

    brake():string {
        return `${this.worker()} is braking with the standard braking system`;
    }

    turn(direction: "left" | "right"): string {
        return `${this.worker()} is turning ${direction}`;
    }

        // This function performs work for the other method functions
        protected worker():string {
            return this._make;
        }

    public static getNumberOfCars(): number{
        return Car.numberOfCars;
    }

}

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;


    // Constructor
    constructor(make:string, color:string, range:number, doors = 2){
        super(make, color, doors);
        this._range = range;
    }

    // Accessors
    get range(){
        return this._range;
    }

    set range(range) {
        this._range = range;
    }

    // Methods
    charge(){
        console.log(this.worker() + " is charging.")
    }

    brake(): string{
        return `${this.worker()} is braking with the regenerative braking system`;
    }


}


let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors);
spark.charge();

console.log(spark.brake()); 


/*
let myCar1 = new Car("Cool Car Company", "blue", 2) // Instantiates the Car object with all parameters
let myCar2 = new Car("Galaxy Motors", "red", 4);
let myCar3 = new Car("Galaxy Motors", "gray");

console.log(myCar1.color);
console.log(myCar3.doors);

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn("right"));


console.log(Car.getNumberOfCars());
*/