import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Catagory } from '../../models/catagory';
import { ProductListPage } from './product-list/product-list';

/**
 * Generated class for the CatagoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catagory',
  templateUrl: 'catagory.html',
})
export class CatagoryPage {
  
  catagories: Catagory[] = [
    { name: "clothes", displyName: "בגדים", icon: "leaf" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatagoryPage');
  }

  viewCatagory(catagoryName: string){
    console.log("catagory: " + catagoryName);
    this.navCtrl.setRoot(ProductListPage);
  }

}
