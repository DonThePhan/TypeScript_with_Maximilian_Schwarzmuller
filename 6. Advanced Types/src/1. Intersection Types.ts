/** INTERSECTION TYPES*/

/** 1.  Create individual types */
// interface Admin { // INTERFACE Alternative
type Admin = {
  name: string;
  privileges: string[];
};

// interface Employee { // INTERFACE Alternative
type Employee = {
  name: string;
  startDate: Date;
};

/** 2.  Use "&" for INTERSECTION */

//* EXAMPLE 1
// interface ElevatedEmployee extends Admin, Employee {}  // INTERFACE Alternative
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Donny',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(e1);

//* EXAMPLE 2
/** Below we have 2 UNION types */
type Combinable = string | number;
type Numeric = number | boolean;

/** w/ UNION types, INTERSECTION acts like a VENN Diagram. In this case the only type that works is 'number' */
type Universal = Combinable & Numeric;

let num1: Universal = 1;
console.log(num1);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
