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
    
//! makes it clear this file is an ES module -> No redeclare errors
export {};