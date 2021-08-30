import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAddProductComponent } from './sale-add-product.component';

describe('SaleAddProductComponent', () => {
  let component: SaleAddProductComponent;
  let fixture: ComponentFixture<SaleAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
