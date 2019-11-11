import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material';
import { RefreshService } from '../../../services/refresh.service';
import { ProjectService } from '../../../services/project.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
 
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private dialog: MatDialog,private service:ProjectService,private refresh:RefreshService) {
    this.createForm();
    this.orgForm
   }

  ngOnInit() {
    
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
        projectCode: [this.data.projectCode, [Validators.required]],
        projectName: [this.data.projectName, [Validators.required]],
        projectPrice: [this.data.projectPrice, [Validators.required]],
        budjet_id: [this.data.budjet_id, [Validators.required]],
        govDirectorate: [this.data.govDirectorate, [Validators.required]],
        province_id: [this.data.province_id, [Validators.required]],
        district_id: [this.data.district_id, [Validators.required]],
        projectStartDate: [this.data.projectStartDate, [Validators.required]],
        projectEndDate: [this.data.projectEndDate, [Validators.required]],
        projectStatus: [this.data.projectStatus, [Validators.required]],
        sector_id: [this.data.sector_id, [Validators.required]],
        organization_id: [this.data.organization_id, [Validators.required]],
    });
  }
  closeDialog(){
    this.dialog.closeAll();
  }
  updateProject(value){
    this.service.updateProjectdata(value.value,this.data.id).subscribe((result)=>{
      this.refresh.setRefresh("refresh");
      this.dialog.closeAll();
    });
  }
}
