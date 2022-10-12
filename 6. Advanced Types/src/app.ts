type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Donny',
  privileges: ['create-server'],
  startDate: new Date(),
};
console.log(e1);

type Numeric = number | boolean;
type Combinable = string | number;

type Universal = Combinable & Numeric;

let num1: Universal = 1;
console.log(num1);

/** TYPE GUARD STRATEGIES - checking if property exists before we utilize it */

function add(a: Combinable, b: Combinable) {
  /** METHOD 1 - Type Comparison */
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
add(1, 2);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  /** METHOD 2 - Check if property IN object*/
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Donny', privileges: ['Canadian'] });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  /** METHOD 3 - Use INSTANCEOF to check if object based on a class */
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);
