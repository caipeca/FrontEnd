import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-caixa-aviso',
  templateUrl: './caixa-aviso.component.html',
  styleUrls: ['./caixa-aviso.component.css']
})
export class CaixaAvisoComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CaixaAvisoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
