import { Component, AfterViewInit, OnDestroy, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-lungo-termine',
  templateUrl: './lungo-termine.component.html',
  styleUrls: ['./lungo-termine.component.scss'],
  imports: [TranslateModule, RouterLink],
  standalone: true
})
export class LungoTermineComponent implements AfterViewInit, OnDestroy {

  // Immagini Premium per Lungo Termine
  heroImage: string = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop'; // Auto sportiva elegante in movimento
  parallaxBg: string = 'https://lirp.cdn-website.com/a317c335/dms3rep/multi/opt/GettyImages-1390814415-2880w.jpg'; // Sfondo moderno/lusso
  infoImage: string = 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop'; // Consegna delle chiavi
  serviceImage: string = '/assets/images/lungoTermine.webp'; // Auto elegante in città

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
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach((el: Element) => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  goBack() {
    this.location.back();
  }
}
