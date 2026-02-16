import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from './components/products/products';
import { Nav } from './components/nav/nav';


@Component({
  selector: 'app-root',
  imports: [ FormsModule, Products, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-stores');

  imgParent = '';
  showImg = true;
  

  onLoaded(img: string){
    console.log('log padre', img);
    

  }

  toggleImg(){

    this.showImg = !this.showImg;
  }
  
}
                                 