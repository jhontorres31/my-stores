import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ProductModel } from '../../models/model.product';
import { CurrencyPipe } from '@angular/common';
import { Img } from '../img/img';
import { Highlight } from "../../directives/highlight";

@Component({
  selector: 'app-product',
  imports: [Img, CurrencyPipe, Highlight],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  @Input() product: ProductModel = {
    
    id:0,
    title:'',
    description:'',
    price:0,
    images:[],
   

  };

  @Output() addedProduct = new EventEmitter<ProductModel>();

  onAddToCart(){

    this.addedProduct.emit(this.product);


  }

}
