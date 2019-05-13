import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  headerText = 'Employee Dashboard';
  errorMsg: string;

  constructor(
    public employeeSvc: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeSvc.getEmployees()
      .subscribe((employees: Employee[]) => {
        this.employeeSvc.setEmployees(employees);
      }, (error) => {
        this.errorMsg = error.statusText;
      });
  }

}
