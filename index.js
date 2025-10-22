import { Car } from './car.js';

const cars = [
    new Car("Sedan", 180, true, "petrol"),
    new Car("SUV", 160, false, "diesel")
];

console.log('First car:');
cars[0].show();

console.log('\nSecond car:');
cars[1].show();

console.log('\n--- Дополнительная демонстрация ---');

console.log(`First car fuel type: ${cars[0].fuelType}`);
cars[0].fuelType = "electric";
console.log(`First car fuel type after change: ${cars[0].fuelType}`);

const clonedCar = Car.clone(cars[0]);
console.log('\nCloned car:');
clonedCar.show();
console.log(`Are original and cloned the same? ${cars[0] === clonedCar}`);

const copiedCar = cars[0].copy();
console.log(`Are original and copied the same? ${cars[0] === copiedCar}`);
