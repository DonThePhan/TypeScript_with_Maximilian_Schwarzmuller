/** CREATING GENERIC FUNCTIONS - used to infer types without specifying - keeps types flexible */

//* in the func below we declared 2 types and gave them aliases (T & U) - this method is good for intersection when the 2 types are likely to be different
function merge<T extends object /** <- constraints */, U, V>(
  objA: T,
  objB: U,
  objC: V,
) {
  return Object.assign(objA, objB, objC); // JS merger function.  We could have used another method. This is just and example.
}
const mergedObj = merge({ name: 'Donny' }, { age: 36 }, { employed: false }); //* we didn't need to specify name:string & age:number

console.log(mergedObj.employed);

//* Example 2
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(['hello world', 'cooking']));
console.log(countAndDescribe('hello world'));
// console.log(countAndDescribe(12)); // TS would flag because, for this case, we are looking for a "length" property that doesn't exist

/** using KEYOF to tape into key of object */
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return 'Value' + obj[key];
}

extractAndConvert({ name: 'Donny' }, 'name');

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
