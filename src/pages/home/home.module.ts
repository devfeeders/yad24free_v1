import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ProductListComponent } from '../../components/product-list/product-list';
import { ProductItemComponent } from '../../components/product-item/product-item';
import { ListPage } from '../list/list';
import { NewProductPage } from '../new-product/new-product';


@NgModule({
  declarations: [
    HomePage,
    ProductListComponent,
    ProductItemComponent,
    ListPage,
    NewProductPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}