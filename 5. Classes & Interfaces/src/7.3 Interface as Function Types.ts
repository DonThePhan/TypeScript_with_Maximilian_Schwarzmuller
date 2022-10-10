// type AddFn = (a: number, b: number) => number;
/** Directly below is an INTERFACE version of the function type above. Can use either and the rest of the code will work the same. */
interface AddFn {
  /** TS understands this as an anonymous function */
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(1, 2));

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
