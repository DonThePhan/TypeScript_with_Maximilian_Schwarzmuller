/** EXTENDING Interfaces. Unlike classes which can only extend another class, interfaces can extend multiple at once. It's actually merging them. */

interface Named {
  readonly name: string;
}

interface Aged {
  age: number;
}

/** Now Greetable has a both properties from Named & Aged ('name' & 'age') */
interface Greetable extends Named, Aged {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 36;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Donny');
user1.greet('Hi there! My name is');
console.log(user1);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.