/** GENERIC CLASSES */

class DataStorage<
  T extends
    | string
    | number
    | boolean /**<- we want to work with ONLY primative types (no objects) */,
> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return; // if we can't find index, return nothing
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

//* Here we specify a 'string' type
const textStorage = new DataStorage<string>();
textStorage.addItem('Donny');
textStorage.addItem('Lana');
textStorage.removeItem('Lana');

console.log(textStorage.getItems());

//* Here we specify a 'number' type
const numberStorage = new DataStorage<number>();
console.log(numberStorage.getItems());

//* We can work w/ objects, but if we want to address them, use their locations. In this case we extended the class to be of type primative, but we can easily remove it then the below code would work fine.
// const objStorage = new DataStorage<object>();
// const donnyObj = { name: 'Donny' }; // using location to ref
// const jacobObj = { name: 'Jacob' }; // using location to ref
// objStorage.addItem(donnyObj);
// objStorage.addItem(jacobObj);
// objStorage.removeItem(donnyObj);
// console.log(objStorage.getItems());

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
