import { Component, OnInit, Inject } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { RefreshService } from '../../../../services/refresh.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: EmployeesService, private refresh: RefreshService, @Inject(MAT_DIALOG_DATA)public data) {
    console.log(data);
   }

  ngOnInit() {
  }

  deleted() {
    this.service.deleteEmployeedata(this.data).subscribe((resutl) => {
      this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    });
  }
  closeDelete() {
    this.dialog.closeAll();
  }

}
