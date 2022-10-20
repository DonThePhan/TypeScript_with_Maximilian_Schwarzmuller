function Logger(constructor: Function) {
  console.log('logging...');
  console.log(constructor);
}

@Logger // Decorator RUNS when JS finds the class definition it's attached to
class Person {
  name = 'Donny';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers);
