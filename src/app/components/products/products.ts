import { Component } from '@angular/core';
import { ProductModel } from '../../models/model.product';
import { Product } from '../product/product';
import { Store } from '../../services/store';
import { ProductService } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [Product],
  templateUrl: './products.html',
  styleUrl: './products.scss',

})
export class Products {


  total = 0;
  
  myShoppingCart: ProductModel[] = [];
  

  products: ProductModel[] = [];



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