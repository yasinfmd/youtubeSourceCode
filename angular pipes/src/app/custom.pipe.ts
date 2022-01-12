import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, count:number=3): unknown {
    return Math.pow(value,count)
  }

}
