import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OrgListService } from '../../components/Services/org-list.service';
import { RefreshService } from '../../components/Services/refresh.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  orgForm: FormGroup;
  organizationtype_id:any;
  donner_id:any;
  
  district_id:any;
  province_id:any;
  constructor(private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private dialog: MatDialog,
  private addOs:OrgListService, private refesh:RefreshService) {
    this.createForm();


   

     this.addOs.selectOrgs().subscribe((result)=>{
        //  console.log(result);
       this.organizationtype_id = result[0];
       this.donner_id = result[5];
     
       this.district_id = result[2];
       this.province_id = result[3];
     });

     
   }

   createForm() {
    this.orgForm = this.formBuilder.group({
        nameDa: ['', Validators.required],
        nameEn: ['', Validators.required],
        abrivation: ['', Validators.required],
        registerNo: ['', Validators.required],
        registerDate: ['', Validators.required],
        contactNo: ['', Validators.required],
        email: ['', Validators.required],
        goals: ['', Validators.required],
        currentCashAmount: ['', Validators.required],
        currency: ['', Validators.required],
        organizationtype_id:['', Validators.required],
      
        
    });
  }

  ngOnInit() {
  }

  onSubmitOrgnizationForm(data) {
   
    this.addOs.createOrganization(data.value).subscribe((res) =>{
        console.log(data,"this is data Caming");
        this.dialog.closeAll();
    });
    
  }



 


 

  

}
