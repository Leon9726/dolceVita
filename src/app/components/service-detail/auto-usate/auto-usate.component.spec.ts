import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUsateComponent } from './auto-usate.component';

describe('AutoUsateComponent', () => {
  let component: AutoUsateComponent;
  let fixture: ComponentFixture<AutoUsateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoUsateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoUsateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
