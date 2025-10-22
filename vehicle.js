export class Vehicle {
    #type;
    #maxSpeed;
    #isOperational;

    constructor(type = "unknown", maxSpeed = 0, isOperational = true) {
        this.#type = type;
        this.#maxSpeed = maxSpeed;
        this.#isOperational = isOperational;
    }

    get type() {
        return this.#type;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    get isOperational() {
        return this.#isOperational;
    }

    set type(value) {
        if (typeof value === 'string' && value.length > 0) {
            this.#type = value;
        } else {
            console.error('Type must be a non-empty string');
        }
    }

    set maxSpeed(value) {
        if (typeof value === 'number' && value >= 0) {
            this.#maxSpeed = value;
        } else {
            console.error('Max speed must be a non-negative number');
        }
    }

    set isOperational(value) {
        if (typeof value === 'boolean') {
            this.#isOperational = value;
        } else {
            console.error('isOperational must be a boolean');
        }
    }

    show() {
        console.log('Vehicle details:');
        console.log(`Type: ${this.#type}`);
        console.log(`Max Speed: ${this.#maxSpeed} km/h`);
        console.log(`Operational: ${this.#isOperational}`);
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        console.log('Vehicle instance has been deleted');
    }

    copy() {
        return this;
    }

    #repair() {
        this.#isOperational = true;
        console.log('Vehicle has been repaired');
    }

    performRepair() {
        this.#repair();
    }

    static clone(vehicle) {
        return new Vehicle(vehicle.type, vehicle.maxSpeed, vehicle.isOperational);
    }
}
