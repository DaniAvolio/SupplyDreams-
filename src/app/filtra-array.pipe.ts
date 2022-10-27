import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraArray',
  pure: false
})
export class FiltraArrayPipe implements PipeTransform {

  transform(array: any[], valore:string, chiave:string): any[] {
    if(valore==="")
    {
      return array
    }
    return array.filter( v => v[chiave] === valore)
  }

}
