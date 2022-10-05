/** ENUM */
enum Role { ADMIN, READ_ONLY, AUTHOR }

/** the enum above creates this below - var declaration, followed by an anonymous function 
 * that immediately executes w/ parameters 'Role || (Role = {})' */
/* 
* var Role;
* (function (Role) {
*    Role[Role["ADMIN"] = 0] = "ADMIN";
*    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
*    Role[Role["AUTHOR"] = 2] = "AUTHOR";
* })(Role || (Role = {}));
*/

/** which makes an object like this: */
/* 
* {0: 'ADMIN', 1: 'READ_ONLY', 2: 'AUTHOR', ADMIN: 0, READ_ONLY: 1, AUTHOR: 2}
 */


const person = {
  name: 'Donny', 
  age: 36,       
  hobbies: ['dancing', 'singing'],
  role: Role.ADMIN
}

if (person.role === Role.AUTHOR) {
  console.log('is author')
}

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 