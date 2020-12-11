import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Personne } from '../model/personne';

const PERSONNE_API =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  selectPersonneSubject = new Subject<Personne>();
  personnes: Personne[] = [];
  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 123456, 38),
      new Personne(
        2,
        'sellaouti2',
        'aymen2',
        'teacher2',
        '                 ',
        123456,
        38
      ),
    ];
  }

  getFPersonnes(): Personne[] {
    return this.personnes;
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(PERSONNE_API);
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }

  getPersonneByID(id: number): Observable<Personne> {
    return this.http.get<Personne>(PERSONNE_API + id);
  }

  deletePersonneByID(id: number): Observable {
    // Récupération du Token
    const token = localStorage.getItem('token');
    //2 méthodes ou à travers les headers ou les params
    /* const params = new HttpParams().set('access_token', token); */
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete(PERSONNE_API + id, {headers});
  }
}
