import {Component, HostListener, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    TranslateModule,
    NgOptimizedImage
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  private translate = inject(TranslateService);

  get currentLang(): string {
    return this.translate.currentLang || 'it';
  }

  // Questa funzione "ascolta" lo scroll del browser
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Se lo scroll supera i 50px, isScrolled diventa true
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  changeLang(lang: string) {
    this.translate.use(lang);
    // Opzionale: chiudi il menu mobile se l'utente cambia lingua da lì
    this.isMenuOpen = false;
  }

}
