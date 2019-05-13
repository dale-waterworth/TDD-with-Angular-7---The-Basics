import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EmployeeListItemComponent } from './employee-list-item.component';
import { EmployeeHelper } from '../../test/employee.helper';
import { EmployeeService } from '../../employee.service';
import { employeeImports } from '../../test/employee.imports';
import { Jobtime } from '../../employee.model';

describe('EmployeeListItemComponent', () => {
  let component: EmployeeListItemComponent;
  let fixture: ComponentFixture<EmployeeListItemComponent>;
  const employeeHelper = new EmployeeHelper();
  let employeeSvc: EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListItemComponent],
      imports: [...employeeImports]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListItemComponent);
    component = fixture.componentInstance;
    employeeSvc = TestBed.get(EmployeeService);
    component.employee = employeeHelper.getParsedEmployeeData(employeeSvc)[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct data', () => {
    const htmlContent = fixture.nativeElement.querySelector('table').innerHTML;

    // just check data exists in this table html
    expect(htmlContent).toContain(component.employee.name, 'Name does not exist');
    expect(htmlContent).toContain(component.employee.department, 'Department does not exist');
    expect(htmlContent).toContain(component.employee.role, 'Role does not exist');
    expect(htmlContent).toContain(component.employee.totalHours, 'Total hours don\'t exist');
    component.employee.times.forEach((jobTime: Jobtime) => {
      expect(htmlContent).toContain(jobTime.jobName, 'Job time name does not exist');
    });
    // dates parsed in html by angular date pipe
    expect(htmlContent).toContain('01/05/2019 9:00', 'A time does not exist');
    expect(htmlContent).toContain('01/05/2019 17:00', 'A time does not exist');
    expect(htmlContent).toContain('02/05/2019 9:00', 'A time does not exist');
    expect(htmlContent).toContain('02/05/2019 17:00', 'A time does not exist');
    expect(htmlContent).toContain('03/05/2019 9:00', 'A time does not exist');
    expect(htmlContent).toContain('03/05/2019 17:00', 'A time does not exist');
  });

});
