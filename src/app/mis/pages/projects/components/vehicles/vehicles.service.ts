import { Injectable, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { RefreshService } from '../../services/refresh.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  displayedColumns: string[] = ['id', 'projectCode', 'projectName', 'projectPrice',"budjet_id","govDirectorate",
  "province_id","district_id","projectStartDate","projectEndDate",'projectStatus','sector_id','organization_id',"option"];
  dataSource;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  animal:any;
  constructor(private dialog: MatDialog,private refresh:RefreshService){
    
  }
  ngOnInit(){
    
  }
}
