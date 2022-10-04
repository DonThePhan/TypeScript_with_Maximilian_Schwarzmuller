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

//! makes it clear this file is an ES module -> No redeclare errors
export {};