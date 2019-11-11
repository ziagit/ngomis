import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../../../services/project.service';
import { RefreshService } from '../../../services/refresh.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  budjet: any;
  province: any;
  district: any;
  sector: any;
  organization: any;
  orgForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private service: ProjectService,
    private refresh: RefreshService) {
    this.createForm();
    this.service.selectTables().subscribe((result) => {
      this.budjet = result[0];
      this.province = result[1];
      this.district = result[2];
      this.sector = result[3];
      this.organization = result[4];
    });
  }

  ngOnInit() {
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
      projectCode: ['', Validators.required],
      projectName: ['', Validators.required],
      projectPrice: ['', Validators.required],
      budjet_id: ['', Validators.required],
      govDirectorate: ['', Validators.required],
      province_id: ['', Validators.required],
      district_id: ['', Validators.required],
      projectStartDate: ['', Validators.required],
      projectEndDate: ['', Validators.required],
      projectStatus: ['', Validators.required],
      sector_id: ['', Validators.required],
      organization_id: ['', Validators.required],
    });
  }
  addProjectFunction(data) {
    if (this.orgForm.valid) {
      this.service.addProject(data.value).subscribe((result) => {
        this.refresh.setRefresh("refresh");
        this.dialog.closeAll();
      });
    }
  }




}
