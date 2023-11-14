import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParDistinationComponent } from './recherche-par-distination.component';

describe('RechercheParDistinationComponent', () => {
  let component: RechercheParDistinationComponent;
  let fixture: ComponentFixture<RechercheParDistinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParDistinationComponent]
    });
    fixture = TestBed.createComponent(RechercheParDistinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
