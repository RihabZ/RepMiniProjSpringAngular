import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExcursionComponent } from './add-excursion.component';

describe('AddExcursionComponent', () => {
  let component: AddExcursionComponent;
  let fixture: ComponentFixture<AddExcursionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExcursionComponent]
    });
    fixture = TestBed.createComponent(AddExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
