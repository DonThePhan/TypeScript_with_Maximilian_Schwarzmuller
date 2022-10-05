/** Type Alias & Custom Types - variables for types
 *  1.  Basic
 *  2.  With Object Types
*/

/** 1. BASIC */
//* Type Alias declarations
type Combinable = number | string                    //* Type Alias 1
type ConversionDescriptor = 'as-number' | 'as-text'  //* Type Alias 1

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result

  // below is just so we return the proper values given the types
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2
  } else /* convert all to string */{
    result = input1.toString() + input2.toString()
  }

  // if (resultConversion === 'as-number') {
  //   return +result
  // } else {
  //   return result.toString()
  // }

  return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames)

/** 2. With Object Types */
type User = { name: string; age: number };

//* so instead of...
// const u1: { name: string; age: number } = { name: 'Max', age: 30 }; 

//* we can do:
const u1: User = { name: 'Max', age: 30 }; 


export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 