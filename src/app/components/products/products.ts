import { Component } from '@angular/core';
import { ProductModel } from '../../models/model.product';
import { Product } from '../product/product';
import { Store } from '../../services/store';
import { ProductService } from '../../services/products';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';

@Component({
  selector: 'app-products',
  imports: [Product, DatePipe, TimeAgoPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',

})
export class Products {


  total = 0;
  
  myShoppingCart: ProductModel[] = [];
  

  products: ProductModel[] = [];
  today = new Date();
  date = new Date (2026, 1, 18);




  constructor( private storeService:Store, private productService: ProductService){

    this.myShoppingCart = this.storeService.getShoppingCart();

  }

  ngOnInit(){
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
      

    });
  }

  onAddToShoppingCart(product: ProductModel){

    
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();

}
}