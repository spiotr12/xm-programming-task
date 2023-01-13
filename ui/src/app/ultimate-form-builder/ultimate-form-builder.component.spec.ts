import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltimateFormBuilderComponent } from './ultimate-form-builder.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { plainToInstance } from 'class-transformer';
import { RegistrationField } from '../core/models';
import { IRegistrationField } from '../core/interfaces';
import { ultimateFormBuilderValidator } from 'src/app/ultimate-form-builder/ultimate-form-builder.validator';

describe('UltimateFormBuilderComponent', () => {
  let component: UltimateFormBuilderComponent;
  let fixture: ComponentFixture<UltimateFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UltimateFormBuilderComponent],
      imports: [
        ReactiveFormsModule,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UltimateFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('config', () => {
    it('should set config', () => {
      // Arrange
      const config = plainToInstance(RegistrationField, [
        {
          name: 'field', label: 'Field', type: 'text', required: true,
          validations: [
            { name: 'minlength', value: '5', message: 'message' },
          ],
        } as IRegistrationField,
      ]);

      // Act
      component.config = config;

      // Assert
      expect(component.config).toEqual(config);
      expect(component.form).toBeDefined();
      expect(component.form.get('field')).toBeDefined();
    });
  });

  describe('build form', () => {
    it('should create multiple controls', () => {
      // Arrange
      const config = plainToInstance(RegistrationField, [
        {
          name: 'field1', label: 'Field 1', type: 'text', required: false,
          validations: [],
        } as IRegistrationField,
        {
          name: 'field2', label: 'Field 2', type: 'text', required: false,
          validations: [],
        } as IRegistrationField,
      ]);

      // Act
      component.config = config;

      // Assert
      expect(Object.keys(component.form.controls).length).toEqual(2);
    });

    it('should create empty form', () => {
      // Arrange
      const config = plainToInstance(RegistrationField, []);

      // Act
      component.config = config;
      const field = component.form.get('field');

      // Assert
      expect(Object.keys(component.form.controls).length).toEqual(0);
    });

    it('should create required validator', () => {
      // Arrange
      const config = plainToInstance(RegistrationField, [
        {
          name: 'field', label: 'Field', type: 'text', required: true,
          validations: [],
        } as IRegistrationField,
      ]);

      // Act
      component.config = config;
      const field = component.form.get('field');

      // Assert
      expect(component.form).toBeDefined();
      expect(field).toBeDefined();
      expect(field?.hasValidator(Validators.required)).toEqual(true);
    });

    it('should create minlength validator', () => {
      // Arrange
      const config = plainToInstance(RegistrationField, [
        {
          name: 'field', label: 'Field', type: 'text',
          validations: [
            { name: 'minlength', value: '5', message: 'message' },
          ],
        } as IRegistrationField,
      ]);

      // Act
      component.config = config;
      const field = component.form.get('field')!;
      field.setValue('asd');

      // Assert
      expect(component.form).toBeDefined();
      expect(field).toBeDefined();
      expect(Object.keys(field.errors as object).length).toEqual(1);
      expect(field.errors?.ultimateFormBuilderError).toBeDefined();
      expect(field.errors?.ultimateFormBuilderError.minlength).toBeDefined();
    });

    it('should have multiple validator', () => {
      // Arrange
      const config = plainToInstance(RegistrationField, [
        {
          name: 'field', label: 'Field', type: 'text', required: true,
          validations: [
            { name: 'minlength', value: '5', message: 'message' },
          ],
        } as IRegistrationField,
      ]);

      // Act
      component.config = config;
      const field = component.form.get('field')!;
      field.setValue('asd');

      // Assert
      expect(component.form).toBeDefined();
      expect(field).toBeDefined();
      expect(field?.hasValidator(Validators.required)).toEqual(true);
      expect(Object.keys(field.errors as object).length).toEqual(1);
      expect(field.errors?.ultimateFormBuilderError).toBeDefined();
      expect(field.errors?.ultimateFormBuilderError.minlength).toBeDefined();
    });
  });

  describe('parseSubmit', () => {
    it('should emit value', () => {
      // Arrange
      jest.spyOn(component.submit, 'emit');

      // Act
      component.parseSubmit();

      // Assert
      expect(component.submit.emit).toHaveBeenCalledWith({});
    });
  });

  describe('toggleShowPassword', () => {
    it('should toggle type value to password', () => {
      // Arrange
      const passwordField = {
        type: 'text',
      } as any as HTMLInputElement;

      // Act
      component.toggleShowPassword(passwordField);

      // Assert
      expect(passwordField.type).toEqual('password');
    });

    it('should toggle value to text', () => {
      // Arrange
      const passwordField = {
        type: 'password',
      } as any as HTMLInputElement;

      // Act
      component.toggleShowPassword(passwordField);

      // Assert
      expect(passwordField.type).toEqual('text');
    });
  });
});
