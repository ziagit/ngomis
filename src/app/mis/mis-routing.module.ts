import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './layout/main-nav/main-nav.component';


const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'ngo',
        loadChildren: './pages/organization/organization.module#OrganizationModule'
      },
      {
        path: 'projects',
        loadChildren: './pages/projects/projects.module#ProjectsModule'
      },
      {
        path: 'reports',
        loadChildren: './pages/reports/reports.module#ReportsModule'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisRoutingModule { }
