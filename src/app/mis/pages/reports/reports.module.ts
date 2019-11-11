import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SixMonthsReportComponent } from './components/six-months-report/six-months-report.component';
import { routing } from './reports.routing';
import { ReportsComponent } from './reports.component';
import { InternalEmployeesComponent } from './components/internal-employees/internal-employees.component';
import { ExternalEmployeesComponent } from './components/external-employees/external-employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { FinanceComponent } from './components/project-info/finance/finance.component';
import { StatisticsComponent } from './components/project-info/statistics/statistics.component';
import { DocumentsComponent } from './components/project-info/documents/documents.component';
import { CtrAssTrainAccountComponent } from './components/project-info/ctr-ass-train-account/ctr-ass-train-account.component';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { MaterialModule } from '../../shared/modules/material/material.module';

@NgModule({
  declarations: [
    SixMonthsReportComponent,
    ReportsComponent,
    InternalEmployeesComponent,
    ExternalEmployeesComponent,
    EmployeeComponent,
    ProjectInfoComponent,
    FinanceComponent,
    StatisticsComponent,
    DocumentsComponent,
    CtrAssTrainAccountComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    routing,
  ]
})
export class ReportsModule { }
