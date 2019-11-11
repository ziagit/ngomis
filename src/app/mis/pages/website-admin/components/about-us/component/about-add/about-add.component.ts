import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AboutUsService } from './../../about-us.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-add',
  templateUrl: './about-add.component.html',
  styleUrls: ['./about-add.component.scss']
})
export class AboutAddComponent implements OnInit {
  aboutForm: FormGroup;
  constructor(private aboutService: AboutUsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.creatForm();
  }
creatForm() {
  this.aboutForm = this.fb.group({
    titleDa: ['', Validators.required],
    titleEn: ['', Validators.required],
    titlePa: ['', Validators.required],
    descriptionDa: ['', Validators.required],
    descriptionEn: ['', Validators.required],
    descriptionPa: ['', Validators.required]
  });
}
addAbout(e) {
  e.preventDefault();
  this.aboutService.addAbout(this.aboutForm.value).subscribe(res => {
    console.log('saved: ', res);
  });
}
}
