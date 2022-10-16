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

/** OPTIONAL CHAINING - to check if values exist before accessing them (so we don't get errors) 
 *  - use when we're fetching data from an API, so there's no guarantee we'll get what we expect
*/
// since we aren't using an API in this example, we'll just create an object
const fetchUserData = {
  id: 'u1',
  name: 'Donny',
  job: { title: 'CEO', description: 'My own company' },
};

// console.log(fetchUserData.job && fetchUserData.job.title); //* vanilla JS way
console.log(fetchUserData?.job?.title); /** OPTIONAL CHAINING alternative */

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
