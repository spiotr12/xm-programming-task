import { Pipe, PipeTransform } from '@angular/core';
import { FieldType } from '../core/interfaces';

@Pipe({
  name: 'inputType',
})
export class InputTypePipe implements PipeTransform {

  transform(value: FieldType, ...args: unknown[]): string {
    if (value === 'phone') {
      return 'tel'
    }

    return value
  }

}
