import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-organization',
  template: `<router-outlet></router-outlet>`,
  styles: [`:host > div{
      padding:10px;
  }`]
})
export class OrganizationComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
}
