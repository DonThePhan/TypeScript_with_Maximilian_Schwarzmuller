/** UNION TYPES (type|type|etc) - if you want to be more flexible w/ your types*/

function combine(input1: string | number, input2: string | number) {
  let result

  // below is just so we return the proper values given the types
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else /* convert all to string */{
    result = input1.toString() + input2.toString()
  }

  return result
}

const combinedAges = combine(30, 26)
console.log(combinedAges)

const combinedNames = combine('Max', 'Anna')
console.log(combinedNames)

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 