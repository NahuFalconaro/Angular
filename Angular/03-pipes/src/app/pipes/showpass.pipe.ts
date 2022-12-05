import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpass'
})
export class ShowpassPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const [verPass] = args;
    return verPass? '*'.repeat(value.length): value;
  }
}
