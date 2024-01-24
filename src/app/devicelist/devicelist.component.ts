import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeviceAddEditComponent } from '../device-add-edit/device-add-edit.component';


@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.css']
})
export class DevicelistComponent {
  title = 'appIot';

  constructor(private _dialog: MatDialog){}

  openAddEditDevice(){
    this._dialog.open(DeviceAddEditComponent);
  }

}
