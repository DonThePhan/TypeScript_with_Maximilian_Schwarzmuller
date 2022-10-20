/** DECORATORS useful for Meta-Programming - writing code that makes it easier to use by other devs */

/** 1. ENABLE "'experimentalDecorators':true" in tsconfig (line 63 for this case) */

//* 2.  Create DECORATOR Function. (common practice to Upper case first letter in decorator func.)
function Logger(constructor /* <- can name anything */: Function) {
  console.log('logging...');
  console.log(constructor);
}

@Logger //* 3.  Decorator RUNS when JS declares the item it's decorating AND when the decorated item is utilized
class Person {
  name = 'Donny';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
