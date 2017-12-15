import { Directive } from '@angular/core';

/**
 * Generated class for the ProductItemDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[product-item]' // Attribute selector
})
export class ProductItemDirective {

  constructor() {
    console.log('Hello ProductItemDirective Directive');
  }

}
