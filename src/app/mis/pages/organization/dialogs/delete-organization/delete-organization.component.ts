import { Component, OnInit, Inject } from '@angular/core';
import { OrgListService } from '../../components/Services/org-list.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-organization',
  templateUrl: './delete-organization.component.html',
  styleUrls: ['./delete-organization.component.scss']
})
export class DeleteOrganizationComponent implements OnInit {

  constructor(private service:OrgListService, private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  deleteOrg(data) {
    console.log("this ",data);
    this.service.deleteOrgs(data).subscribe((res) => {
      console.log("this ",data);
      this.dialog.closeAll();
    });
  }
 
    

 

  

}
