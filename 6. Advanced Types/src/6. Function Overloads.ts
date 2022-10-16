type Combinable = string | number;

/** FUNCTION OVERLOADS - Return conditions for return types, depending on arg types - can add multiple
 *    - for when TS can't directlyl infer return type on its own  */
function add(a: number, b: number): number; //* if a is number and b is number, then we should return a number
function add(a: string, b: string): string; //* if a is string and b is string, then we should return a string
function add(a: number, b: string): string; //* if a is number and b is string, then we should return a string
function add(a: string, b: string): number; //* if a is string and b is number, then we should return a string

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(add(1, 2));
console.log(add('Donny', 'Phan'));

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
