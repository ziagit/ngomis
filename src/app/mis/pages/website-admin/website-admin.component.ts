import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-website-admin',
  template: `<router-outlet></router-outlet>`
})
export class WebsiteAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
