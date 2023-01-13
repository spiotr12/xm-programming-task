import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFieldComponent } from './password-field.component';

describe('PasswordFieldComponent', () => {
  let component: PasswordFieldComponent;
  let fixture: ComponentFixture<PasswordFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordFieldComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('toggle', () => {
    it('should toggle type value to text', () => {
      // Arrange

      // Act
      component.toggle();

      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;

      // Assert
      expect(compiled.querySelector('input')?.type).toEqual('text');
    });

    it('should toggle value to password', () => {
      // Arrange
      component.toggle();

      // Act
      component.toggle();

      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;

      // Assert
      expect(compiled.querySelector('input')?.type).toEqual('password');
    });
  });
});
