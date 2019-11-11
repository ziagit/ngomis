import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../../../services/project.service';
import { RefreshService } from '../../../services/refresh.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss']
})
export class DeleteProjectComponent implements OnInit {

  constructor(private refresh:RefreshService,private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data:any,private service:ProjectService) { 
    console.log(this.data);
  }

  ngOnInit() {
  }
  deleteProject(data){
    this.service.deleteProjectdata(this.data.id).subscribe((result)=>{
      this.refresh.setRefresh("refresh");
      this.dialog.closeAll();
    });
  }
  closeDelete(){
    this.dialog.closeAll();
  }
}
