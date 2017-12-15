import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable()
export class ProductProvider {

  products: Product[] = [
    {
      id: '123',
      description: "חולצה כמו חדשה, איכות מעולה",
      imageURL: "https://img.buzzfeed.com/buzzfeed-static/static/2017-02/17/15/enhanced/buzzfeed-prod-fastlane-03/original-grid-image-11910-1487361843-6.jpg?crop=846:1280;91,0&downsize=715:*&output-format=auto&output-quality=auto",
      price: "free",
      likes: 10,
      createdAt: new Date(),
      lastUpdateDate: null,
      status: 'new'
    },
    {
      id: '123',
      description: "שמלת ערב מהממת, נלבשה רק פעם אחת",
      imageURL: "https://i.pinimg.com/736x/ea/fb/1c/eafb1cf2b87cf41dcca491499f34a198--red-clothes-women-sexy-clothes.jpg",
      price: "free",
      likes: 10,
      createdAt: new Date(),
      lastUpdateDate: null,
      status: 'new'
    },
    {
      id: '123',
      description: "שמלת ערב מהממת, נלבשה רק פעם אחת",
      imageURL: "https://imgfave.azureedge.net/image_cache/1368490246751275.jpg",
      price: "free",
      likes: 10,
      createdAt: new Date(),
      lastUpdateDate: null,
      status: 'new'
    }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  addNewProduct(product: Product){
    this.products.push(product);
  }

  getAllProducts(){
    return this.products;
  }

  getProductsByCatagory(Catagory: string){}

  removeProduct(key: string){}

  updateProduct(oldeProduct: Product, newProduct: Product){}

  searchProduct(text: string){}

}
