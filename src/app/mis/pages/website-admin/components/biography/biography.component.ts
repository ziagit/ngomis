import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'projectCode', 'projectName', 'projectPrice',"budjet_id","govDirectorate",
  "province_id","district_id"];
  dataSource;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator,{ read: true, static: false }) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
  }

}
