import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { AddEmployeeComponent } from './dialog/add-employee/add-employee.component';
import { RefreshService } from '../../services/refresh.service';
import { EmployeesService } from './services/employees.service';
import { EditEmployeeComponent } from './dialog/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './dialog/delete-employee/delete-employee.component';
import { ShowEmployeeComponent } from './dialog/show-employee/show-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'fatherName', 'TIN', "job", "education",
    "gender", "salary", "country", "option"];
  dataSource;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  animal: any;

  constructor(private refresh: RefreshService, private dialog: MatDialog, private service: EmployeesService) {
    this.getEmployee();
  }

  @ViewChild(MatPaginator, { read: true, static: false }) paginator: MatPaginator;
  ngOnInit() {
    this.refresh.getRefresh().subscribe((refresh) => {
      this.getEmployee();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  getEmployee() {
    this.service.getEmployeedata().subscribe((result) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
    });
  }
  editEmployee(id) {
    this.service.editEmployeedata(id).subscribe((result) => {
      const dialogRef = this.dialog.open(EditEmployeeComponent, {
        width: '800px',
        data: result
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    })
  }
  deleteEmployee(id) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '400px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  showInfo(id) {
    this.service.showAllemployeeData(id).subscribe((result) => {
      const dialogRef = this.dialog.open(ShowEmployeeComponent, {
        width: '1000px',
        data: result
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    });
  }
}
