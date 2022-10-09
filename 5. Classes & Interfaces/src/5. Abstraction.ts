/**ABSTRACT classes CANNOT create objects directly. ONLY their inheriting classes can.
 * used when we want a method inside it abstracted - to inheriting classes.
 */
abstract class /** <- NOTE key word */ Department {
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name };
  }
  static fiscalYear = 2022;

  /** Changed 'id' to PROTECTED so it can be accessed by inheriting classes */
  constructor(protected readonly id: string, public name: string) {
    console.log(Department.fiscalYear);
  }

  /** ABSTRACT enforces all inheriting classes MUST overwrite this method */
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  /** If we don't define a new 'describe' method here, the class will be flagged. (try commenting it out to see) */
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

const accounting = new AccountingDepartment('ID_1', []);
accounting.addReport('First Quarter');
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Donny');
accounting.addEmployee('Lex');

accounting.describe();

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
