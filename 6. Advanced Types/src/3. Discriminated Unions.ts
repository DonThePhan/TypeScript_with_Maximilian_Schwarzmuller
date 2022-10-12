/** DISCRIMINATED UNIONS - strategy is good for LARGE UNIONS */

/** 1. Assign Literal Types to each Interface */
interface Bird {
  type: 'bird'; //* Literal Type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; //* Literal Type
  runningSpeed: number;
}

/** 2. UNION of 2+ interfaces */
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  /** 3. SET the flexible variable in Function */
  let speed;

  /** 4. Special SWITCH CASE for each Type */
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  /** 5. use updated Variable */
  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
