/** DECORATOR FACTORIES
 *  Note that the creation of the Decorators happens in the order we call them. BUT executing is reverse order (see the commented sequence order below)
 */

//* Decorator Factory Function 1
function Logger(logString: string) {
  console.log('LOGGER'); /** 1 */

  return function (constructor: Function) {
    console.log(logString); /** 5 */
    console.log(constructor); /** 6 */
  };
}

//* Decorator Factory Function 2
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY'); /** 2 */
  return function (constructor: any) {
    console.log('Rendering template'); /** 3 */
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name; //* in this case 'Donny'
    }
  };
}
//* Decorator RUNS when JS declares the item it's decorating
@Logger('LOGGING - PERSON') // Decorator Factory Function ex. 1
@WithTemplate('<h1>My Person Object</h1>', 'app') // Decorator Factory Function ex. 2
class Person {
  name = 'Donny';

  constructor() {
    console.log('Creating person object...'); /** 4/7 */
  }
}

const pers = new Person();
console.log(pers); /** 8 */

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.