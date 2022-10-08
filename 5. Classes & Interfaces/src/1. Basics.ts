class Department {
  /** Declare all variables that don't need parameter assignment here */
  /** By default, attributes are made PUBLIC (accessible from outside obj.) - PRIVATE makes attribute unaccessible from outside object  */
  private employees: string[] = [];
  // private readyonly id: string;    //* these 2 commented out lines are moved to constructor parameters
  // public name: string;

  /** Runs when object is created.
   *  We can delare private/public in here if assigning immediately.
   *  - simpler than declaring it above and then assigning it below
   *  - readonly keeps data from being modified after initial assignment */
  constructor(private readonly id: string, public name: string) {
    // this.id = id;    //* we don't need these lines because we similtaneously declared/assigned in parameters
    // this.name = name;
  }

  /** type in function parameter below will help function be more specific. In the example, 'this' refers to this object */
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'ID_2' //* gives errors because it's set as readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('ID_1', 'Accounting');

accounting.addEmployee('Donny');
accounting.addEmployee('Lana');
// accounting.employees.push('SNAFU') // no longer works because we made attr. private (which is probably what we want)
// accounting.name = "New Name"; // still works because attr. is public

accounting.describe();
// console.log(accounting.name);
accounting.printEmployeeInformation();

// const accountingCopy = { name:'DUMMY', describe: accounting.describe }
// accountingCopy.describe()

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 