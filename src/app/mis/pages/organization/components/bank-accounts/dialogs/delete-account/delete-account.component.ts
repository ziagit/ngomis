import { Component, OnInit, Inject } from '@angular/core';
import { AddAccountComponent } from '../add-account/add-account.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BankAccountsService } from '../../bank-accounts.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {
 myId
  constructor( @Inject(MAT_DIALOG_DATA) private id: any,private service: BankAccountsService,private dialog:MatDialog) {
    this.myId = this.id;
   }
 

  ngOnInit() {
  }
  deleteAccount(){
     this.service.deleteAccount(this.myId).subscribe(res=>{
      this.service.setRefresh("refresh");
      this.dialog.closeAll();     
       console.log("deleted ", res);
     })

  }


}
