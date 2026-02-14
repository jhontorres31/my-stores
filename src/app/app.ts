import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Img } from "./components/img/img";

@Component({
  selector: 'app-root',
  imports: [Img, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-stores');

  imgParent = '';

  onLoaded(img: string){
    console.log('log padre', img);
    

  }

  
}
                                 