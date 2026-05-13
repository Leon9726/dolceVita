import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonoleggioComponent } from './autonoleggio.component';

describe('AutonoleggioComponent', () => {
  let component: AutonoleggioComponent;
  let fixture: ComponentFixture<AutonoleggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonoleggioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutonoleggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
