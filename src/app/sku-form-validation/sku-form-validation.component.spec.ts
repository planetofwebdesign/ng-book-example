import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFormValidationComponent } from './sku-form-validation.component';

describe('SkuFormValidationComponent', () => {
  let component: SkuFormValidationComponent;
  let fixture: ComponentFixture<SkuFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
