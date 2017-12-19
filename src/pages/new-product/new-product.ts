import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Product } from '../../models/product';

import {Camera} from '@ionic-native/camera';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the NewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {

  product = {} as Product;
  public base64Image: string;
  private imageData: string;

  constructor(public camera: Camera,
    private productProvider: ProductProvider,
    public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProductPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
  closeModalWithData(product: Product){
    this.viewCtrl.dismiss({ data: product });
  }

  takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1024,
        targetHeight: 764
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.imageData = imageData;
        //console.log("image data: " + imageData);
    }, (err) => {
        console.log(err);
    });
  }

  addProduct(product: Product){
    this.productProvider.uploadProductImage(this.imageData).then(snapshot =>{
      product.imageURL = snapshot.downloadURL;
      product.likes = 0;
      product.createdAt = new Date();
      product.lastUpdateDate = new Date();
      product.status = "new";
      product.price = product.price || 'free';
      //product.imageURL = "https://imgfave.azureedge.net/image_cache/1368490246751275.jpg"
      this.productProvider.addNewProduct(product);
    },
  (error)=>{
    console.log("failed to upload!");
  });
  }

}
