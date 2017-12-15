import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListPage } from './product-list';
import { ProductItemComponent } from '../../../components/product-item/product-item';

@NgModule({
  declarations: [
    ProductListPage,
    ProductItemComponent
  ],
  imports: [
    IonicPageModule.forChild(ProductListPage),
  ],
})
export class ProductListPageModule {}
