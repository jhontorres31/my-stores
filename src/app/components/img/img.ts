import { Component, Input,Output, EventEmitter, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.scss',
})
export class Img {

    @Input('img')
    img: string = ''; 
    set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>' ,this.img);
    
   } 
  
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault= '/images/descarga.png';
  public counter = signal(0);
  public counterFn: any;

constructor(){
  //before render
  // no se debe correr cosas de forma asyncrona y corre una sola vez
  console.log('constructor', 'imgValue =>', this.img);
  
}

ngOnChanges(changes: SimpleChanges){
 // antes y durante del render y actualizando los cambios en los input
 // varias veces
 // aqui los inputs es lo mejor
 console.log('ngOnChanges', 'imgValue =>', this.img);
 console.log('changes',changes);

  

}

ngOnInit(){
  // antes de renderizarse 
  // aqui podemos correr cosas asyncronas fect, llamadas a api, cosas q esperen un tiempo una sola vez
  
      this.counterFn = setInterval(() => {
        this.counter.update(v => v + 1);
        console.log('run counter');
      
  }, 1000);

}

ngAfterViewInit(){

  // despues de que todo este renderizado
  console.log('ngOnChanges', 'imgValue =>', this.img);
}

ngOnDestroy(){
  // eliminar el componente
  console.log('ngOnDestroy', 'imgValue =>', this.img);
  clearInterval(this.counterFn);
}


  imgError(){

    this.img = this.imageDefault;
  }

  imgLoaded(){

    console.log('log hijo');
    this.loaded.emit(this.img);
    
  }

}
