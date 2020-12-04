import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectPersonneSubject = new Subject<Personne>();
  personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 123456, 38),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '                 ', 123456, 38),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
}
