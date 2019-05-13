import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { employeeDeclarations } from '../test/employee.declarations';
import { EmployeeService } from '../employee.service';
import { employeeProviders } from '../test/employee.providers';
import { employeeImports } from '../test/employee.imports';
import { EmployeeHelper } from '../test/employee.helper';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  const employeeHelper = new EmployeeHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeListComponent,
        ...employeeDeclarations
      ],
      imports: [...employeeImports],
      providers: [...employeeProviders]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the no employees message when the list is empty', () => {
    const errorText = fixture.nativeElement.querySelector('p').innerHTML;
    expect(errorText).toContain(component.noEmployeesFound);
  });

  it('should display the list of employees', inject([EmployeeService],
    (employeeSvc: EmployeeService) => {

      component.employees = employeeHelper.getParsedEmployeeData(employeeSvc);

      fixture.detectChanges();

      const listItems = fixture.nativeElement.querySelectorAll('app-employee-list-item');

      expect(listItems.length).toBe(employeeSvc.employees.length, 'Incorrect number of list items');
    }));



});
