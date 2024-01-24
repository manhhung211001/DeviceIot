import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicelistComponent } from './devicelist/devicelist.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'devicelist', component: DevicelistComponent},
  {path: 'map', component: MapComponent},
  {path:'device-add-edit', component:DevicelistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
