import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { KeypersonsServiceService } from '../Services/keypersonsService/keypersons-service.service';
import { AddKeypersonsComponent } from '../../dialogs/add-keypersons/add-keypersons.component';

@Component({
  selector: 'app-keypersons',
  templateUrl: './keypersons.component.html',
  styleUrls: ['./keypersons.component.scss']
})
export class KeypersonsComponent implements OnInit {
  animal: any;
  constructor(private dialog: MatDialog, private keypersonsSerivces: KeypersonsServiceService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddKeypersonsComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.animal = result;

    });
  }




}
