import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-dashboard/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './employee-dashboard/employee-list/employee-list-item/employee-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    EmployeeListComponent,
    EmployeeListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
