class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

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

  /** GETTERs */
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  /** SETTERs */
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

/** access property as SETTER */
accounting.mostRecentReport = 'Year End Report';

/** access property as GETTER (no parentheses) */
console.log(accounting.mostRecentReport);

accounting.printReports();
accounting.addEmployee('Donny');
accounting.addEmployee('Lex');
accounting.printEmployeeInformation();

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 
