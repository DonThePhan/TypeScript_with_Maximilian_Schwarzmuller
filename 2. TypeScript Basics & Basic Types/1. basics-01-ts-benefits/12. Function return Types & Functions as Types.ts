/** FUNCTION TYPES:
 *  1.  Types of function RETURN types:
 *        1.  'void' (most common) 
 *        2.  'undefined' 
 *  2.  FUNCTION as TYPES - Types it receives as Parameters
 *        1.  example w/ callback
 * */

function add(n1: number, n2: number) {
  return n1 + n2
}

/** 1.1 - RETURN Type 'void' - TS auto assigns void if nothing is returned, but good practice to include it to show deliberation. Also with return type void, even if we return something w/ value, it won't be used for anything because of 'void' */ 
function printResult(num: number):void {
  console.log('Result: ' + num)

  /** 1.2 - RETURN Type 'undefined' - if there is a return statement w/ no value, need to make function return type undefined*/
  // return 
}


printResult(add(5, 12))

/** 2. FUNCTION as TYPES */
let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8,8))

/** 2.1 - example w/ callback (a good use case for this) */
function addAndHandle(n1: number, n2: number, cb:(num:number)=> void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) => { 
  console.log(result)
})

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 