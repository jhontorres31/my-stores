import { Component, Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


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

constructor(){
  //before render
  // no se debe correr cosas de forma asyncrona y corre una sola vez
  console.log('constructor', 'imgValue =>', this.img);
  
}

ngOnChanges(){
 // antes y durante del render y actualizando los cambios en los input
 // varias veces
 // aqui los inputs es lo mejor
 console.log('ngOnChanges', 'imgValue =>', this.img);

}

ngOnInit(){
  // antes de renderizarse 
  // aqui podemos correr cosas asyncronas fect, llamadas a api, cosas q esperen un tiempo una sola vez
  console.log('ngOnInit', 'imgValue =>', this.img);
}

ngAfterViewInit(){

  // despues de que todo este renderizado
  console.log('ngOnChanges', 'imgValue =>', this.img);
}

ngOnDestroy(){
  // eliminar el componente
  console.log('ngOnDestroy', 'imgValue =>', this.img);
}


  imgError(){

    this.img = this.imageDefault;
  }

  imgLoaded(){

    console.log('log hijo');
    this.loaded.emit(this.img);
    
  }

}
