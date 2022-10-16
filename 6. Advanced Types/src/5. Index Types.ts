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

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

/** INDEX TYPES - even if we don't know the exact property names/values, we can still specify their types */
interface ErrorContainer {
  [prop: string]: string; //* any key/value pairs will be string/string
}
const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character',
  // phone: 1234567, // this would flag as error because the value is not string like we specified in the inteface above
};

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
