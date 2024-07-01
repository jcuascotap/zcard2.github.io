import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiverAtuomaticsComponent } from './diver-atuomatics.component';

describe('DiverAtuomaticsComponent', () => {
  let component: DiverAtuomaticsComponent;
  let fixture: ComponentFixture<DiverAtuomaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiverAtuomaticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiverAtuomaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
