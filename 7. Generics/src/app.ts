/** GENERIC Types - A type that works w/ other types - Array, Promise */

//* Array - specify what data type is in the Array
const names: Array<string> = ['Donny', 'Lana']; // TSC alternative to "string[]"
console.log(names);

//* Promises - Specify what data we will return
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);

  reject('error');
});

promise
  .then((data) => {
    // data.split(' '); TSC will flag because it knows we're dealing w/ numbers
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
