/** CORE TYPES:
 * 1. number - All nums are nums. NO dif between integers & floats
 * 2. string
 * 3. boolean - true, false

 */

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //! w/ TypeScript, we don't need to code this below since it will detect it for us during development
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!')
  // }
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  }
  else {
    return result;
  }
}

let number1 = 5; // 5.0, decimal doesn't matter. Still same type
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase);
console.log(result); 

//! makes it clear this file is an ES module -> No redeclare errors
export {};