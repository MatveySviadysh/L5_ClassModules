import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {
    #fuelType;

    constructor(type = "car", maxSpeed = 0, isOperational = true, fuelType = "petrol") {
        super(type, maxSpeed, isOperational);
        this.#fuelType = fuelType;
    }

    get fuelType() {
        return this.#fuelType;
    }

    set fuelType(value) {
        const validFuelTypes = ['petrol', 'diesel', 'electric', 'hybrid'];
        if (validFuelTypes.includes(value)) {
            this.#fuelType = value;
        } else {
            console.error('Invalid fuel type. Must be one of: petrol, diesel, electric, hybrid');
        }
    }

    show() {
        console.log('Car details:');
        console.log(`Type: ${this.type}`);
        console.log(`Max Speed: ${this.maxSpeed} km/h`);
        console.log(`Operational: ${this.isOperational}`);
        console.log(`Fuel Type: ${this.#fuelType}`);
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        console.log('Car instance has been deleted');
    }

    copy() {
        return this;
    }

    static clone(car) {
        return new Car(car.type, car.maxSpeed, car.isOperational, car.fuelType);
    }

    // Приватный метод удален в дочернем классе
}
