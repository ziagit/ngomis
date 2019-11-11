import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {
  showresult:any
  constructor(private route: ActivatedRoute,private emservice:EmployeesService) { 
    emservice.showAllemployeeData(route.snapshot.paramMap.get("id")).subscribe((result)=>{
      this.showresult= result;
    })

  }

  ngOnInit() {
  }

}
