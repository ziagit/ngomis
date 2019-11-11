import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material';
import { AddAccountComponent } from './dialogs/add-account/add-account.component';
import { BankAccountsService } from './bank-accounts.service';
import { IBankAccount } from "./BankAccount";
import { DeleteAccountComponent } from './dialogs/delete-account/delete-account.component';
import { BankEditComponent } from './dialogs/bank-edit/bank-edit.component';


@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {
  @ViewChild(MatPaginator, { read: true, static: false }) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'organization_id', 'project_id', 'keyspersonnel_id', 'name', 'location', 'currency', 'option'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private dialog: MatDialog, private service: BankAccountsService) {
    this.getAccount();
  }


  ngOnInit() {
    this.service.getRefresh().subscribe(result => {
      this.getAccount();
    });
  }

  addAccount(): void {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getAccount() {
    this.service.getBankAccounts().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      console.log("check for optiosn: ", res);
      this.dataSource.paginator = this.paginator;
    });
  }


  editAccount(editData): void {
    const dialogRef = this.dialog.open(BankEditComponent, {
      width: '800px',
      data: editData
    });
  }
  deleteAccount(id) {
    const dialogRef = this.dialog.open(DeleteAccountComponent, {
      width: '400px',
      data: id
    });
  }
}
