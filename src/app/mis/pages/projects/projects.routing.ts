import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ShowEmployeeComponent } from './components/employees/dialog/show-employee/show-employee.component';

const projecRoutes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        children: [
            { path: '', redirectTo: 'project-list', pathMatch: 'full' },
            { path: 'project-list', component: ProjectsListComponent },
            { path: 'employees', component: EmployeesComponent },
            { path: 'equipments', component: EquipmentsComponent },
            { path: 'vehicles', component: VehiclesComponent },
            { path: 'employee-details/:id', component: ShowEmployeeComponent }


        ]
    }
];

export const routing = RouterModule.forChild(projecRoutes);
