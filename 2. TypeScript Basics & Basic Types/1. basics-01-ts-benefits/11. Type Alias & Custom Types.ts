/** Type Alias & Custom Types - variables for types*/

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

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 