import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { employeeImports } from './employee-dashboard/test/employee.imports';
import { employeeProviders } from './employee-dashboard/test/employee.providers';
import { employeeDeclarations } from './employee-dashboard/test/employee.declarations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        employeeDeclarations,
      ],
      imports: [
        employeeImports
      ],
      providers: [
        employeeProviders
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
