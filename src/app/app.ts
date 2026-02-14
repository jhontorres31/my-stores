import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './components/product/product';
import { ProductModel } from './models/model.product';


import { Img } from "./components/img/img";

@Component({
  selector: 'app-root',
  imports: [Img, FormsModule, Product],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-stores');

  imgParent = '';
  products: ProductModel[] = [

     {
        id: 1,
        name: 'Amarillo',
        precio: 100,
        image: '/images/image1.jpg'
    },
    {
        id: 2,
        name: 'Ronde caldas',
        precio: 180,
        image: './images/image2.jpg'
    },
    {
        id: 3,
        name: 'Ballys',
        precio: 120,
        image: './images/image3.jpg'
    }
  ];

  onLoaded(img: string){
    console.log('log padre', img);
    

  }

  
}
                                 