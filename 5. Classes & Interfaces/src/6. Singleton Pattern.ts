/** SINGLETON PATTERN - use PRIVATE CONSTRUCTOR in conjunction w/ STATIC METHOD to ensure ONLY ONE object instance of a particular class is created */

abstract class Department {
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name };
  }
  static fiscalYear = 2022;

  constructor(protected readonly id: string, public name: string) {
    console.log(Department.fiscalYear);
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/** in most cases the SINGLETON PATTERN will be used in an inheriting class, but not restricted to it. */
class AccountingDepartment extends Department {
  private lastReport: string;

  /** 1. Create PRIVATE (only accessible inside class) & STATIC property */
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  /** 2. PRIVATE CONSTRUCTOR - ensures it can ONLY be accessible inside the class -> we CAN'T call "new" on it (CAN'T create object from it) outside class */
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  /** 3. STATIC method to call on the constructor.
   *  the steps inside this function ensure ONLY 1 instance of the object will be created
   */
  static getInstance /* <- NOTE, this isn't a getter method, just a name we gave it */() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Donny') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

/** 4. Now instead of: */
// const accounting = new AccountingDepartment('ID_1', []); // no longer callable outside class

/** ...we now do: */
const accounting = AccountingDepartment.getInstance();

/** ...and any subsequent creation will be the SAME object */
const accounting2 = AccountingDepartment.getInstance();

/** ...SAME objects */
console.log(accounting === accounting2); // true

accounting.addReport('First Quarter');
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Donny');
accounting.addEmployee('Lex');

accounting.describe();

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.