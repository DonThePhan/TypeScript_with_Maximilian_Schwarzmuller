type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Combinable = string | number;

/** TYPE GUARD STRATEGIES - checking if property exists before we utilize it */

function add(a: Combinable, b: Combinable) {
  /** METHOD 1 - Type Comparison */
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
add(1, 2);

/** ------------------------------------------------------ */

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

/** ------------------------------------------------------ */
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

  /** METHOD 3 - Use INSTANCEOF to check if object based on a class (doesn't work for interface - cuz JS doesn't actually recognize interface) */
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
