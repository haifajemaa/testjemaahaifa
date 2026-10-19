import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peroid',
})
export class PeroidPipe implements PipeTransform {
  transform(nb:number): string {
    return nb +"jours &"+(nb-1)+"nuits";
  }
}
