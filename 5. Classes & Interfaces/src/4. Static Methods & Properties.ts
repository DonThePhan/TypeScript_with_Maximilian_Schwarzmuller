class Department {
  protected employees: string[] = [];

  /** STATIC METHOD - Accessible w/o creating object from class */
  static createEmployee(name: string) {
    return { name };
  }

  /** STATIC PROPERTY - Accessible w/o creating object from class */
  static fiscalYear = 2022;

  constructor(private readonly id: string, public name: string) {
    /** to Access STATIC methods/properties inside class, address the class instead of 'this' */
    console.log(Department.fiscalYear);
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

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
accounting.printEmployeeInformation();

/** Use the STATIC METHOD */
const employee1 = Department.createEmployee('Donny');
console.log(employee1);

/** Use the STATIC PROPERTY */
console.log(Department.fiscalYear);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 