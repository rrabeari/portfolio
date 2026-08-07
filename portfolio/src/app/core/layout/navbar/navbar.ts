import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // Etat menu mobile
  isMenuOpen = signal(false);

  // Etat scroll
  isScrolled = signal(false);


  toggleMenu(){

    this.isMenuOpen.update(value => !value);

  }


  closeMenu(){

    this.isMenuOpen.set(false);

  }



  @HostListener('window:scroll')
  onScroll(){

    this.isScrolled.set(window.scrollY > 50);

  }


}
