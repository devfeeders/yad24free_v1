import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductItemComponent } from '../../../components/product-item/product-item';
import { Product } from '../../../models/product';
import { ProductProvider } from '../../../providers/product/product';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage {
  productsSubscription: Subscription;

  // products: Product[] = [
  //   {
  //     id: '123',
  //     description: "חולצה כמו חדשה, איכות מעולה",
  //     imageURL: "https://img.buzzfeed.com/buzzfeed-static/static/2017-02/17/15/enhanced/buzzfeed-prod-fastlane-03/original-grid-image-11910-1487361843-6.jpg?crop=846:1280;91,0&downsize=715:*&output-format=auto&output-quality=auto",
  //     price: "free",
  //     likes: 10,
  //     createdAt: new Date(),
  //     lastUpdateDate: null,
  //     status: 'new'
  //   },
  //   {
  //     id: '123',
  //     description: "שמלת ערב מהממת, נלבשה רק פעם אחת",
  //     imageURL: "https://i.pinimg.com/736x/ea/fb/1c/eafb1cf2b87cf41dcca491499f34a198--red-clothes-women-sexy-clothes.jpg",
  //     price: "free",
  //     likes: 10,
  //     createdAt: new Date(),
  //     lastUpdateDate: null,
  //     status: 'new'
  //   },
  //   {
  //     id: '123',
  //     description: "שמלת ערב מהממת, נלבשה רק פעם אחת",
  //     imageURL: "https://imgfave.azureedge.net/image_cache/1368490246751275.jpg",
  //     price: "free",
  //     likes: 10,
  //     createdAt: new Date(),
  //     lastUpdateDate: null,
  //     status: 'new'
  //   }
  // ];
  products: Product[] = [];

  constructor(
    private productProvider: ProductProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.productsSubscription = productProvider.getAllProducts().subscribe( data => {
        this.products = data;
        console.log("home data: " + JSON.stringify(this.products));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  ionViewWillLeave(){
    this.productsSubscription.unsubscribe();
  }

}
