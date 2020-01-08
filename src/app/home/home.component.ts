import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   constructor(
    private dialog: MatDialog
  ){}

  @ViewChild('ContactDialog', { static: true }) ContactDialog: TemplateRef<any>;
  
  openContactDialog(){
    this.dialog.open(this.ContactDialog);
  }
}








