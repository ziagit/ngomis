import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { SixMonthsReportComponent } from './components/six-months-report/six-months-report.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';


const childRoutes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            { path: '', redirectTo: 'employees', pathMatch: 'full' },
            { path: 'employees', component: EmployeeComponent },
            { path: 'six-months-report', component: SixMonthsReportComponent },
            {path: 'project-info', component: ProjectInfoComponent}
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
