import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit(): void {
  }
  catchSelectedPersonne(forwardedPersonne: Personne) {
    this.selectedPersonne = forwardedPersonne;
  }

}
