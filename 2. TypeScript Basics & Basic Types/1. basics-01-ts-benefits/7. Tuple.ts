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
 
/**  */

person.role = [0, 'admin', /*'user'*/] /** will only allow exactly what is specified. No more (i.e. 'user' in this case), no less */

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 