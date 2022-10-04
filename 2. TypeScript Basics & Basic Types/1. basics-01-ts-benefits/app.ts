const person: {
  name: string,
  age: number,
  hobbies: string[] /** <- Array */,
  role: [number, string] /** <- TUPLE */
} = {
  name: 'Donny', 
  age: 36,       
  hobbies: ['dancing', 'singing'],
  role: [2,'author']
}

// person.role.push('admin')
// person.role[1] = 10

person.role = [0, 'admin', /*'user'*/] /** will only allow exactly what is specified. No more (i.e. 'user' in this case), no less */
    
let favouriteActivities: string[]
favouriteActivities = ['dancing', 'singing']


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase() /** no issue here with toUpperCase because TS knows it's of type string */)
  console.log(hobby.map() /** here TS flags this because it knows it's working w/ a string so map should've be available */)
}

//! makes it clear this file is an ES module -> No redeclare errors
export {};