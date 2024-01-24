import { Component } from '@angular/core';



@Component({
  selector: 'app-device-add-edit',
  templateUrl: './device-add-edit.component.html',
  styleUrls: ['./device-add-edit.component.css']
})
export class DeviceAddEditComponent {
  education: string[] = [
    'Camera Ezviz C6N',
    'Router Wifi Tenda',
    'Dir conditioning'
  ]
}
