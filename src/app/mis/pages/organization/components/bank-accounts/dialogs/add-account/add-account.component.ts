import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { BankAccountsService } from '../../bank-accounts.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  lookups
  organization_id:any;
  project_id:any;
  keyspersonnel_id:any;
  accountForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialo: MatDialog, private service: BankAccountsService) {
 
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
      organization_id: ['', Validators.required],
      project_id: ['', Validators.required],
      keyspersonnel_id: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      currency: ['', Validators.required],

    });
  }
  addAccount() {
    this.service.addBankAccounts(this.accountForm.value).subscribe(res => {
      this.service.setRefresh("refresh");
      this.dialo.closeAll();
      console.log('saved.', res)
    });
    
  }




}
