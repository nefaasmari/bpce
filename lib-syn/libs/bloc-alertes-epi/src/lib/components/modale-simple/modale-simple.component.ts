import {Component, OnInit} from '@angular/core';
import {DialogRef} from '@myway/ui';

@Component({
  selector: 'clients-profcli-modale-simple',
  templateUrl: './modale-simple.component.html',
  styleUrls: ['./modale-simple.component.scss']
})
export class ModaleSimpleComponent {
  public dataModal: any;

  constructor(private dialogRef: DialogRef) {
    this.dataModal = this.dialogRef.data;
  }
}
