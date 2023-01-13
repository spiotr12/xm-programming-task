import { ultimateFormBuilderValidator } from './ultimate-form-builder.validator';
import { FormControl } from '@angular/forms';
import { plainToInstance } from 'class-transformer';
import { FieldValidation } from '../core/models';

describe('ultimateFormBuilderValidator', () => {
  describe('default', () => {
    it('should return null', () => {
      // Arrange
      const fieldValidation = plainToInstance(FieldValidation, {
          name: 'not-recognized-validation-type',
          message: 'Should always show error',
          value: true,
        },
      );

      const control = new FormControl();
      control.setValue('01234');

      // Act
      const result = ultimateFormBuilderValidator(fieldValidation)(control);

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('maxlength', () => {
    it('should test and pass validation', () => {
      // Arrange
      const fieldValidation = plainToInstance(FieldValidation, {
          name: 'maxlength',
          message: 'Must be less than 6 characters.',
          value: 5,
        },
      );

      const control = new FormControl();
      control.setValue('01234');

      // Act
      const result = ultimateFormBuilderValidator(fieldValidation)(control);

      // Assert
      expect(result).toBeNull();
    });

    it('should test and fail validation', () => {
      // Arrange
      const fieldValidation = plainToInstance(FieldValidation, {
          name: 'maxlength',
          message: 'Must be less than 6 characters.',
          value: 5,
        },
      );

      const control = new FormControl();
      control.setValue('012345678');

      // Act
      const result = ultimateFormBuilderValidator(fieldValidation)(control);

      // Assert
      expect(result).not.toBeNull();
      expect(result!['customError']).toBeDefined();
      expect(result!['customError'].message).toEqual('Must be less than 6 characters.');
    });
  });

  describe('mimlength', () => {
    it('should test and pass validation', () => {
      // Arrange
      const fieldValidation = plainToInstance(FieldValidation, {
          name: 'minlength',
          message: 'Must not be less than 4 characters.',
          value: 4,
        },
      );

      const control = new FormControl();
      control.setValue('0123456');

      // Act
      const result = ultimateFormBuilderValidator(fieldValidation)(control);

      // Assert
      expect(result).toBeNull();
    });

    it('should test and fail validation', () => {
      // Arrange
      const fieldValidation = plainToInstance(FieldValidation, {
          name: 'minlength',
          message: 'Must not be less than 4 characters.',
          value: 4,
        },
      );

      const control = new FormControl();
      control.setValue('01');

      // Act
      const result = ultimateFormBuilderValidator(fieldValidation)(control);

      // Assert
      expect(result).not.toBeNull();
      expect(result!['customError']).toBeDefined();
      expect(result!['customError'].message).toEqual('Must not be less than 4 characters.');
    });
  });

  describe('regex', () => {
    it('should test and pass validation', () => {
      // Arrange
      const fieldValidation = plainToInstance(FieldValidation, {
          name: 'regex',
          message: 'Must match only characters.',
          value: '^.*[a-z].*$',
        },
      );

      const control = new FormControl();
      control.setValue('abs');

      // Act
      const result = ultimateFormBuilderValidator(fieldValidation)(control);

      // Assert
      expect(result).toBeNull();
    });

    it('should test and fail validation', () => {
      // Arrange
      const fieldValidation = plainToInstance(FieldValidation, {
          name: 'regex',
          message: 'Must match only characters.',
          value: '^.*[a-z].*$',
        },
      );

      const control = new FormControl();
      control.setValue('ASD');

      // Act
      const result = ultimateFormBuilderValidator(fieldValidation)(control);

      // Assert
      expect(result).not.toBeNull();
      expect(result!['customError']).toBeDefined();
      expect(result!['customError'].message).toEqual('Must match only characters.');
    });
  });
});
