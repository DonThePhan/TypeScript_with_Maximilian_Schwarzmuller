/** INTERFACES are similar to type alias'. They are used primarily to define objects because they are more specific (limited to only objects vs type alias' which can also be union types)
 */

/** 1. Create Interface
 */
interface Greetable {
  //* can use 'readonly' (set once & read only there) but NOT 'public' or 'private'
  readonly name: string;

  greet(phrase: string): void;
}

/** 2. Use interface in Class w/ keyword 'impliments' */
class Person implements Greetable {
  name: string;
  age = 36;

  constructor(n: string) {
    this.name = n;
  }

  /** since the "Greetable" interface specifies a 'greet' method, we need to include one */
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

/** 3.  Declare variable & assign it an interface. Can have multiple! */
let user1: Greetable;

/** 4.  Create object & assigned to variable - if 'greet' method isn't inside the class, it will be flagged */
user1 = new Person('Donny');
user1.greet('Hi there! My name is');
console.log(user1);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.