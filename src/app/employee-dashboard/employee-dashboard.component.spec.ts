import { async, ComponentFixture, TestBed, fakeAsync, inject, tick } from '@angular/core/testing';

import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { employeeImports } from './test/employee.imports';
import { employeeProviders } from './test/employee.providers';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';
import { Employee } from './employee.model';
import { employeeDeclarations } from './test/employee.declarations';
import { EmployeeHelper } from './test/employee.helper';

describe('EmployeeDashboardComponent', () => {
  let component: EmployeeDashboardComponent;
  let fixture: ComponentFixture<EmployeeDashboardComponent>;
  const employeeHelper = new EmployeeHelper();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeDashboardComponent,
        ...employeeDeclarations
      ],
      imports: [
        ...employeeImports
      ],
      providers: [
        ...employeeProviders
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  const runGetEmployeeData = (httpMock: HttpTestingController, callingURL: string, data: any) => {

    const mockReq = httpMock.expectOne((req: HttpRequest<any>) => req.url.includes(callingURL));

    mockReq.flush(data);

    httpMock.verify();

    tick(250);

    fixture.detectChanges();
  };


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct header in h1', () => {
    const element = fixture.nativeElement.querySelector('h1');

    expect(element.innerHTML).toBe(component.headerText);
  });

  it('should call the api', inject([HttpTestingController],
    (httpMock: HttpTestingController) => {

      const callingURL = component.employeeSvc.API_EMPLOYEE;

      httpMock.expectOne((req: HttpRequest<any>) => req.url.includes(callingURL));

      httpMock.verify();

    }));

  it('should call the api and set the data', fakeAsync(inject([HttpTestingController],
    (httpMock: HttpTestingController) => {

      const callingURL = component.employeeSvc.API_EMPLOYEE;

      const data: any = employeeHelper.getData();

      runGetEmployeeData(httpMock, callingURL, data);

      const employees: Employee[] = component.employeeSvc.employees;

      expect(employees.length).toBeGreaterThan(0);

    })));

  it('should call the api and handle the error', fakeAsync(inject([HttpTestingController],
    (httpMock: HttpTestingController) => {

      const callingURL = component.employeeSvc.API_EMPLOYEE;

      const statusText = 'Internal Server Error';

      httpMock.expectOne((req: HttpRequest<any>) => {
        return req.url.includes(callingURL);
      }).error(new ErrorEvent('Customer Error', { error: 500, message: 'error message' }),
        { status: 500, statusText });

      httpMock.verify();

      tick(250);

      fixture.detectChanges();

      expect(component.errorMsg).toBe(statusText);

    })));

});
