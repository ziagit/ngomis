import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankAccountsService } from '../../bank-accounts.service';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.scss']
})

export class BankEditComponent implements OnInit {
  organization_id:any;  
  project_id:any;
  keyspersonnel_id:any;
  accountForm: FormGroup;
  myData;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private formBuilder: FormBuilder, private service:BankAccountsService,private dialo: MatDialog,) {
            console.log("myd dat from accoutn page: ", data)
            this.myData=data;
   }

  ngOnInit() {
    this.service.getLookups().subscribe(res=>{
      console.log(res);
      this.project_id = res[0];
     this.organization_id = res[1];
     this.keyspersonnel_id= res[2];
    })
    this.createForm();
  }

  createForm() {
    this.accountForm = this.formBuilder.group({
      organization_id: [this.data.organization_id, [Validators.required]],
      project_id: [this.data.project_id, [Validators.required]],
      keyspersonnel_id: [this.data.keyspersonnel_id, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      location: [this.data.location, [Validators.required]],
      currency: [this.data.currency, [Validators.required]],

    });
  }
  updateAccount(id){
      this.service.updateAccount(this.accountForm.value,id).subscribe(res=>{
      this.service.setRefresh("refresh");
      this.dialo.closeAll();
       console.log("this is update data send of update form",res);
     });
  }
 
  
}
