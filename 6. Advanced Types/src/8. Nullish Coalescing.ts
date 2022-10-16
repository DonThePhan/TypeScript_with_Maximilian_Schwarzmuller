type Combinable = string | number;

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

const fetchUserData = {
  id: 'u1',
  name: 'Donny',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchUserData?.job?.title);

/** NULLISH COALESCING - '??' - means if first value is "null" OR "undefined", use the second value. Better than '||' because '' would also be falsey. */

const userInput = '';

const storedData = userInput ?? /** instead of || */ 'SOME VALUE'; //* Output is still ''. If we used '||', first value would === falsey so output would be "SOME VALUE"

console.log(storedData);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
