import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleUpdateComponent } from './sale-update.component';

describe('SaleUpdateComponent', () => {
  let component: SaleUpdateComponent;
  let fixture: ComponentFixture<SaleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
