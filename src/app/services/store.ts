import { Injectable } from '@angular/core';
import { ProductModel } from '../models/model.product';

@Injectable({
  providedIn: 'root',
})
export class Store {

   private  myShoppingCart: ProductModel[] = [];

    addProduct(product:ProductModel){

      this.myShoppingCart.push(product);

    }

    getShoppingCart(){

      return this.myShoppingCart;
    }

    getTotal(){

      return this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0);
    }
  
}
