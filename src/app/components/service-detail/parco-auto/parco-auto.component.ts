import { Component, AfterViewInit, OnDestroy, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, Location } from "@angular/common";

interface Car {
  name: string;
  imageUrl: string;
}

interface FleetSegment {
  title: string;
  cars: Car[];
}

@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss'],
  imports: [TranslateModule, RouterLink, CommonModule],
  standalone: true
})
export class ParcoAutoComponent implements AfterViewInit, OnDestroy {

  heroImage: string = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2000&auto=format&fit=crop'; // Immagine premium per la vetrina

  // Dati del Parco Auto (Puoi sostituire le immagini Unsplash con le tue vere foto dei veicoli)
  fleetData: FleetSegment[] = [
    {
      title: 'Segmento A',
      cars: [
        { name: 'Fiat Panda', imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?q=80&w=800&auto=format&fit=crop' },
        { name: 'Renault Twingo', imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c3ea?q=80&w=800&auto=format&fit=crop' },
        { name: 'Hyundai i10', imageUrl: 'https://images.unsplash.com/photo-1629897048514-3dd7414dbbba?q=80&w=800&auto=format&fit=crop' },
        { name: 'Fiat 500', imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Segmento B',
      cars: [
        { name: 'Fiat Punto', imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop' },
        { name: 'Fiat Tipo', imageUrl: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=800&auto=format&fit=crop' },
        { name: 'Fiat 500L', imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Segmento C',
      cars: [
        { name: 'Opel Astra', imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop' },
        { name: 'Renault Clio', imageUrl: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?q=80&w=800&auto=format&fit=crop' },
        { name: 'Kia Sportage', imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop' }
      ]
    }
  ];

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
      threshold: 0.1, // Abbassato per far apparire prima le card
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
