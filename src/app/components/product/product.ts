import { Component, Input} from '@angular/core';
import { ProductModel } from '../../models/model.product';

@Component({
  selector: 'app-product',
  imports: [ ],
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

}
