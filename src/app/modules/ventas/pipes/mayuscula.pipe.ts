import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(value: string, enMayuscula?: boolean): string {
    try {
      if(value != null && enMayuscula != false){
        return value.toUpperCase();
      }else{
        return value.toLowerCase();
      }
    } catch (error) {
      return 'ERROR';
    }
    return 'ERROR';
  }

}
