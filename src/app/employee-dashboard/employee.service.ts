import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { Employee, Jobtime } from './employee.model';
import { TimeService } from '../shared/services/time.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly API_EMPLOYEE = 'employee';

  employees: Employee[];

  constructor(
    private apiSvc: ApiService,
    private timeSvc: TimeService
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.apiSvc.get<Employee[]>(this.API_EMPLOYEE);
  }

  setEmployees(employees: Employee[]): any {
    this.parseEmployees(employees);
    this.employees = employees;
  }

  private parseEmployees(employees: Employee[]) {

    employees.forEach((employee) => {

      let duration = 0;

      employee.times.forEach((jobtime: Jobtime) => {
        const start = this.timeSvc.getDate(jobtime.startTime);
        const end = this.timeSvc.getDate(jobtime.endTime);

        duration += end.diff(start);

        jobtime.startTime = start.toDate();
        jobtime.endTime = end.toDate();
      });

      employee.totalHours = this.timeSvc.toHHMMSS(duration / 1000);

    });
  }

}
