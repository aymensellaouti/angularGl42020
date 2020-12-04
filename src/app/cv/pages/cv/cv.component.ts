import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedPersonne: Personne; */
  nbClick = 0;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.selectPersonneSubject.pipe(
      distinctUntilChanged()
    ).subscribe(
      (personne) => this.nbClick++
    );
  }
}
