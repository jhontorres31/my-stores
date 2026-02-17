import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ProductModel } from '../../models/model.product';
import { Img } from '../img/img';

@Component({
  selector: 'app-product',
  imports: [ Img],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  @Input() product: ProductModel = {
    
    id:0,
    name:'',
    precio:0,
    image:''

  }

  @Output() addedProduct = new EventEmitter<ProductModel>();

  onAddToCart(){

    this.addedProduct.emit(this.product);


  }

}
