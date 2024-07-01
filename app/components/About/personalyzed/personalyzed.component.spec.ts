import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalyzedComponent } from './personalyzed.component';

describe('PersonalyzedComponent', () => {
  let component: PersonalyzedComponent;
  let fixture: ComponentFixture<PersonalyzedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalyzedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalyzedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
