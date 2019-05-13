import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { employeeImports } from 'src/app/employee-dashboard/test/employee.imports';
import { employeeProviders } from 'src/app/employee-dashboard/test/employee.providers';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        ...employeeImports
      ],
      providers: [
        ...employeeProviders
      ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
