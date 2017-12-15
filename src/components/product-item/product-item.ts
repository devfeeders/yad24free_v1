import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../models/product';

/**
 * Generated class for the ProductItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-item',
  templateUrl: 'product-item.html'
})
export class ProductItemComponent {

  @Input() product = {} as Product;

  constructor() {
    //console.log('product_image: ' + this.product_image);
  }

  incrementLikes(){
    console.log("likes increased");
    this.product.likes += 1;
  }

}
