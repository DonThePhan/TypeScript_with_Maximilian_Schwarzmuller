/** DECORATOR FACTORIES */

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON') // Decorator RUNS when JS finds the class definition it's attached to
class Person {
  name = 'Donny';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers);
