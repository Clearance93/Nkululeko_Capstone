import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAddProductComponent } from './feature-add-product.component';

describe('FeatureAddProductComponent', () => {
  let component: FeatureAddProductComponent;
  let fixture: ComponentFixture<FeatureAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
