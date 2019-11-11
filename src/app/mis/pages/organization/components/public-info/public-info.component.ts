import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { PInfoServicesService } from '../Services/PublicInfoServices/p-info-services.service';
import { RefreshService } from '../Services/refresh.service';

@Component({
  selector: 'app-public-info',
  templateUrl: './public-info.component.html',
  styleUrls: ['./public-info.component.scss']
})
export class PublicInfoComponent implements OnInit {
  dataSource;

  
  animal:any;
  @ViewChild(MatPaginator,{ read: true, static: false }) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns: string[] = ['id','nameDa', 'nameEn', 'abrivation', 'registerNo','registerDate','contactNo','email',
'organizationtype_id','currentCashAmount','currency'];

  constructor(private dialog:MatDialog, private publicInfoServices:PInfoServicesService, private refresh:RefreshService) {

    this.getpublicInfo();
   }

  ngOnInit() {
    this.refresh.getRefresh().subscribe((refresh)=>{
      this.getpublicInfo();
    });
    
    // console.log(this.getpublicInfo);
  }
getpublicInfo() {
  
  this.publicInfoServices.getPublicInfoAsDB().subscribe( res=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator; 
  });
}


}
