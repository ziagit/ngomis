import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { routing } from './projects.routing';
import { ProjectsComponent } from './projects.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddProjectComponent } from './components/dialogs/add-project/add-project.component';
import { ProjectService } from './services/project.service';
import { RefreshService } from './services/refresh.service';
import { EditProjectComponent } from './components/dialogs/edit-project/edit-project.component';
import { DeleteProjectComponent } from './components/dialogs/delete-project/delete-project.component';
import { AddEmployeeComponent } from './components/employees/dialog/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/dialog/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './components/employees/dialog/delete-employee/delete-employee.component';
import { EmployeesService } from './components/employees/services/employees.service';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ShowEmployeeComponent } from './components/employees/dialog/show-employee/show-employee.component';
import { MaterialModule } from 'src/app/mis/shared/modules/material/material.module';
import { SharedModule } from 'src/app/mis/shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    EquipmentsComponent,
    VehiclesComponent,
    EmployeesComponent,
    AddProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeesComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    MainContainerComponent,
    ShowEmployeeComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    routing,
  ],
  providers: [
    ProjectService,
    RefreshService,
    EmployeesService
  ],
  entryComponents: [
    AddProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    EmployeesComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    AddEmployeeComponent,
    MainContainerComponent,
  ]
})
export class ProjectsModule { }
