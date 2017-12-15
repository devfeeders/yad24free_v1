import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatagoryPage } from './catagory';

@NgModule({
  declarations: [
    CatagoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CatagoryPage),
  ],
})
export class CatagoryPageModule {}
