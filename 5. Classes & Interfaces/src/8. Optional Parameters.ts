/** Optional Parameters */

interface Named {
  readonly name?: string /** ? for optional */;
}

interface Aged {
  age: number;
}

interface Greetable extends Named, Aged {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string; /** ? for optional */
  age = 36;

  constructor(n?: string) {
    /** ? for optional */
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

user1 = new Person(); /** since parameters optional, we won't get flagged */
user1.greet('Hi there! My name is');
console.log(user1);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
