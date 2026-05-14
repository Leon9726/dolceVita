import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeicoliCommercialiComponent } from './veicoli-commerciali.component';

describe('VeicoliCommercialiComponent', () => {
  let component: VeicoliCommercialiComponent;
  let fixture: ComponentFixture<VeicoliCommercialiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeicoliCommercialiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeicoliCommercialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
