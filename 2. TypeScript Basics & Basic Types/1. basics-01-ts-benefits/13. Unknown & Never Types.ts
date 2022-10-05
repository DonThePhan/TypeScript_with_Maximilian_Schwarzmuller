/** 1. Type UNKNOWN - use over ANY as it's still more specific */

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Donny'

// userName = userInput //* This causes an error because userInput is still type 'unknown', while userName is type 'string'

//* This if statement guarantees userInput is type 'string', so no errors
if (typeof userInput === 'string') {
  userName = userInput
}

/** 2. Type NEVER - 'never' does not return. That means no undefined or nothing, such as in the case of an error where the script just stops */
function generateError(message: string, code: number):never /** if you don't set to 'never', TS infers 'void' */ {
  throw {message: message, errorCode:code}
}

generateError('an error occurred', 500)

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 
