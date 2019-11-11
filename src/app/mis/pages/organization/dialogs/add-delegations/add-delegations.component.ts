import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-delegations',
  templateUrl: './add-delegations.component.html',
  styleUrls: ['./add-delegations.component.scss']
})
export class AddDelegationsComponent implements OnInit {
  deleForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();

   }

  ngOnInit() {
  }

  createForm() {
    this.deleForm = this.formBuilder.group({
        nameDa: ['', Validators.required],
        
        
    });
  }

}
