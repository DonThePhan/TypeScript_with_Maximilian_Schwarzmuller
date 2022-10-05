/** Can delclare this way */
// const person: { name: string; age:number} = {
  //   name: 'Donny',
  //   age: 36
  // }
  
/** Use type INFERENCE instead */
const person = {
  name: 'Donny',  // Type string is inferred
  age: 36,        // Type number is inferred
}
    
export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 