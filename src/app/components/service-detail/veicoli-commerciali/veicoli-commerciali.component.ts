import { Component, AfterViewInit, OnDestroy, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-veicoli-commerciali',
  templateUrl: './veicoli-commerciali.component.html',
  styleUrls: ['./veicoli-commerciali.component.scss'],
  imports: [TranslateModule, RouterLink],
  standalone: true
})
export class VeicoliCommercialiComponent implements AfterViewInit, OnDestroy {

  // Immagini Premium per Veicoli Commerciali
  heroImage: string = 'https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?q=80&w=2000&auto=format&fit=crop'; // Furgone in movimento
  parallaxBg: string = '/assets/images/veicoloBackground.jpg';
  infoImage: string = '/assets/images/furgoni.webp';
  vanImage: string = '/assets/images/furgonePeugeot.webp'; // Furgone bianco pulito

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
