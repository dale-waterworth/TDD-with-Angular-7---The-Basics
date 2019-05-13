import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employees: Employee[];
  readonly noEmployeesFound = 'No Employees found';

  constructor() { }

  ngOnInit() {
  }

}
