import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativaPrivacyComponent } from './informativa-privacy.component';

describe('InformativaPrivacyComponent', () => {
  let component: InformativaPrivacyComponent;
  let fixture: ComponentFixture<InformativaPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformativaPrivacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformativaPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
