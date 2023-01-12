import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateFormBuilderComponent } from './ultimate-form-builder.component';

describe('UltimateFormBuilderComponent', () => {
  let component: UltimateFormBuilderComponent;
  let fixture: ComponentFixture<UltimateFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimateFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimateFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
