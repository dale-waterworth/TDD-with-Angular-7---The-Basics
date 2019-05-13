import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { employeeImports } from './test/employee.imports';
import { employeeProviders } from './test/employee.providers';
import { Employee } from './employee.model';
import { EmployeeHelper } from './test/employee.helper';

describe('EmployeeService', () => {

  let service: EmployeeService;
  const employeeHelper = new EmployeeHelper();

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ...employeeImports
    ],
    providers: [
      ...employeeProviders
    ]

  }));

  beforeEach(() => {
    service = TestBed.get(EmployeeService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should parse the employee data and set the correct time', () => {

    employeeHelper.getParsedEmployeeData(service);

    expect(service.employees[0].totalHours).toBe('24:00:00');
    expect(service.employees[1].totalHours).toBe('10:00:00');
    expect(service.employees[2].totalHours).toBe('00:00:00');

  });

});
