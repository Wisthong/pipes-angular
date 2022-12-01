import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === true) {
      return 'Vuela';
    } else {
      return 'No vuela';
    }
  }
}
