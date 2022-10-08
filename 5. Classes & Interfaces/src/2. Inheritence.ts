class Department {
  /** PROTECTED is like PRIVATE except inheriting classes also have access to it. PRIVATE is only available in origin class */
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

/** Use EXTENDS to inherit */
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    /** SUPER calls constructor of inherited class - goes on FIRST line in contructor. Here we Automatically set name to "IT" */
    super(id, 'IT');
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    /** Here we Automatically set name to "Accounting" */
    super(id, 'Accounting');
  }

  /** Can OVERRIDE inherited class methods */
  addEmployee(name: string) {
    if (name === 'Donny') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment('ID_2', ['Donny']);
IT.addEmployee('Jacob');
IT.addEmployee('Peter');
IT.describe();
IT.printEmployeeInformation();

const accounting = new AccountingDepartment('ID_1', []);
accounting.addReport('Something went wrong...');
accounting.printReports();
accounting.addEmployee('Donny');
accounting.addEmployee('Lex');
accounting.printEmployeeInformation();


export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables. 
