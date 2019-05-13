import { ApiService } from 'src/app/shared/services/api.service';
import { TimeService } from 'src/app/shared/services/time.service';
import { EmployeeService } from '../employee.service';

export const employeeProviders = [
    ApiService,
    TimeService,
    EmployeeService
];
