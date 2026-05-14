import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LungoTermineComponent } from './lungo-termine.component';

describe('LungoTermineComponent', () => {
  let component: LungoTermineComponent;
  let fixture: ComponentFixture<LungoTermineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LungoTermineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LungoTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
