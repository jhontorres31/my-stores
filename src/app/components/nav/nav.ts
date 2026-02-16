import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

activeMenu = false;

toggleMenu(){

  this.activeMenu = !this.activeMenu;
}


}
