import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsDynamicsComponent } from './credits-dynamics.component';

describe('CreditsDynamicsComponent', () => {
  let component: CreditsDynamicsComponent;
  let fixture: ComponentFixture<CreditsDynamicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditsDynamicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsDynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
