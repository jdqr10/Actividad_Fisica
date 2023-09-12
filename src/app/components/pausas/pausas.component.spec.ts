import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausasComponent } from './pausas.component';

describe('PausasComponent', () => {
  let component: PausasComponent;
  let fixture: ComponentFixture<PausasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PausasComponent]
    });
    fixture = TestBed.createComponent(PausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
