import { Component, OnInit, Input, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { RefreshService } from '../../../../services/refresh.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  condition:boolean=true;
  notcondition:boolean=false;
  province:any
  employeetypes:any
  organization:any
  
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any,private emservice:EmployeesService, private dialog: MatDialog,private refresh:RefreshService) {
    this.createForm();
    this.emservice.getrealationtable().subscribe((result)=>{
      this.province = result[0];
      this.employeetypes = result[1];
      this.organization = result[2];
      
    });
    
    
   }

  ngOnInit() {
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
        name: [this.data.name, [Validators.required]],
        fatherName:[this.data.fatherName],
        TIN:[this.data.TIN],
        job: [this.data.job,[Validators.required]],
        education: [this.data.education, Validators.required],
        specialty: [this.data.specialty, Validators.required],
        gender: [this.data.gender, Validators.required],
        salary: [this.data.salary, Validators.required],
        country: [this.data.country, Validators.required],
        province_id: [this.data.province_id, Validators.required],
        contractStartDate: [this.data.contractStartDate, Validators.required],
        contractEndDate: [this.data.contractEndDate, Validators.required],
        employeeType_id: [this.employeeType, Validators.required],
        organization_id: [this.data.organization_id, Validators.required],
        identity:[this.data.identity,[Validators.required]],
        remarks:[this.data.remarks],
        photo:[this.data.photo]
    });
  }
  employeeType(data){
    if(data=="0"){
      this.condition = false;
      this.notcondition = true;
    }
    else if(data=="1"){
      this.notcondition = false;
      this.condition=true;
    }
  }
  closeEdit(){
    this.dialog.closeAll();
  }
  updateEmployee(value){
    if(this.orgForm.valid){
      this.emservice.updateEmployeedata(value.value,this.data.id).subscribe((result)=>{
        this.refresh.setRefresh("refresh");
        this.dialog.closeAll();
      })
    }
  }
}
