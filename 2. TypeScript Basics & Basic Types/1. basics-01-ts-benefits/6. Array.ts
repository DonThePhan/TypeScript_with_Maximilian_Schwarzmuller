const person = {
  name: 'Donny',  // Type string is inferred
  age: 36,        // Type number is inferred
  hobbies: ['dancing', 'singing'] /** <- ARRAY */
    }
    
let favouriteActivities: string[]
favouriteActivities = ['dancing', 'singing']


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase() /** no issue here with toUpperCase because TS knows it's of type string */)
  console.log(hobby.map() /** here TS flags this because it knows it's working w/ a string so map should've be available */)
}

//! makes it clear this file is an ES module -> No redeclare errors
export {};