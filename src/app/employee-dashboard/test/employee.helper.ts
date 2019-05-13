import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

export class EmployeeHelper {

    getData() {
        return require('./employeeTestData.json');
    }

    getParsedEmployeeData(employeeSvc: EmployeeService, employeeData: any = this.getData()): Employee[] {
        employeeSvc.setEmployees(employeeData);

        return employeeSvc.employees;
    }
}
