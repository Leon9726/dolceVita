import { Component, AfterViewInit, OnDestroy, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from "@angular/common";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-informazioni-legali',
  templateUrl: './informazioni-legali.component.html',
  styleUrls: ['./informazioni-legali.component.scss'],
  imports: [TranslateModule],
  standalone: true
})
export class InformazioniLegaliComponent implements AfterViewInit, OnDestroy {

  // Immagine per l'intestazione (tema ufficio/legale)
  heroImage: string = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000';

  private observer?: IntersectionObserver;
  private el = inject(ElementRef);

  constructor(private location: Location) {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.reveal-on-scroll');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach((el: Element) => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  goBack() {
    this.location.back();
  }
}
