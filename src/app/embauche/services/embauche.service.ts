import { Injectable } from '@angular/core';
import { Personne } from 'src/app/cv/model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  emabuches: Personne[] = [];
  constructor() { }
  getEmbauches(): Personne[] {
    return this.emabuches;
  }
  embaucher(personne: Personne) {
    /*
      Si la personne est deja embauché message erreur
      Sinon elle l'ajoute dans la liste des personnes embauchées
    */
    const index = this.emabuches.indexOf(personne);
    if (index >= 0) {
      return 0;
    } else {
      this.emabuches.push(personne);
      return 1;
    }
  }
}
