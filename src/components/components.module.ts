import { NgModule } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item';
import { ProductListComponent } from './product-list/product-list';
@NgModule({
	declarations: [ProductItemComponent,
    ProductListComponent],
	imports: [],
	exports: [ProductItemComponent,
    ProductListComponent]
})
export class ComponentsModule {}
