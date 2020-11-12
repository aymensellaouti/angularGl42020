import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomString',
})
export class RandomStringPipe implements PipeTransform {
  transform(size: number): string {
    let randString = '';
    for (let i = 0; i < size; i++) {
      randString += 'a' + i;
    }
    console.log(randString);
    return randString;
  }
}
