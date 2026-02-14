import { Component, Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
;

@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.scss',
})
export class Img {

  @Input() img: string ='valor inicial';
  @Output() loaded = new EventEmitter<string>();
  imageDefault= '/images/descarga.png';

  imgError(){

    this.img = this.imageDefault;
  }

  imgLoaded(){

    console.log('log hijo');
    this.loaded.emit(this.img);
    
  }

}
