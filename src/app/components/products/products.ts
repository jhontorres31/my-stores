import { Component } from '@angular/core';
import { ProductModel } from '../../models/model.product';
import { Product } from '../product/product';

@Component({
  selector: 'app-products',
  imports: [Product],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  myShoppingCart: ProductModel[] = [];
  total = 0;

  products: ProductModel[] = [

    {
      id: 1,
      name: 'EL mejor juguete',
      precio: 565,
      image: 'images/toy.jpg'
    },
    {
      id: 2,
      name: 'Bicicleta casi nueva',
      precio: 356,
      image: 'images/bike.jpg'
    },
    {
      id: 3,
      name: 'Colección de albumnes',
      precio: 34,
      image: 'images/album.jpg'
    },
    {
      id: 4,
      name: 'Mis libros',
      precio: 23,
      image: 'images/books.jpg'
    },
  ];

  onAddToShoppingCart(product: ProductModel){

    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.precio, 0)
  }

}
