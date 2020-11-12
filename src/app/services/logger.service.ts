import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  logger(thing: unknown) {
    console.log(thing);
  }
}
