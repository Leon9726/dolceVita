import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolavaggioComponent } from './autolavaggio.component';

describe('AutolavaggioComponent', () => {
  let component: AutolavaggioComponent;
  let fixture: ComponentFixture<AutolavaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolavaggioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutolavaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
