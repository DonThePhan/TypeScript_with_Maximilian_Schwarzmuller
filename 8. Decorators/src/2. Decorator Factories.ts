/** DECORATOR FACTORIES */

//* Decorator Factory Function 1
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

//* Decorator Factory Function 2
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name; //* in this case 'Donny'
    }
  };
}
//* Decorator RUNS when JS declares the item it's decorating AND when the decorated item is utilized
// @Logger('LOGGING - PERSON') // Decorator Factory Function ex. 1
@WithTemplate('<h1>My Person Object</h1>', 'app') // Decorator Factory Function ex. 2
class Person {
  name = 'Donny';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
