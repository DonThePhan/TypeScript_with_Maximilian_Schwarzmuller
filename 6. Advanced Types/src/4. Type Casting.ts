/** TYPE CASTING - helps you tell TypeScript that is value is of a specific type that TSC can't identify on its own */

interface Bird {
  type: 'bird'; //* Literal Type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; //* Literal Type
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

/** OPTION 1: we use "<HTML<elementName>Element>" to let TS know its type since the id isn't enough */
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')! // '!' to let TS know there will ALWAYS be a value. Otherwise it will flag cuz there's a possibility for undefined
// );

/** OPTION 2: add suffix 'as HTMLInputElement' */
const userInputElement = document.getElementById('user-input');

// we can also try 'if' vs '!' method as well this time around
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
