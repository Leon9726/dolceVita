import { Component, HostListener, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private translate = inject(TranslateService);

  isScrolled = false;
  isMenuOpen = false;
  isServicesOpenMobile = false; // Per l'accordion mobile

  get currentLang(): string {
    return this.translate.currentLang || 'it';
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isServicesOpenMobile = false;
  }

  toggleServicesMobile(event: Event) {
    if (window.innerWidth <= 992) {
      event.preventDefault();
      this.isServicesOpenMobile = !this.isServicesOpenMobile;
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
