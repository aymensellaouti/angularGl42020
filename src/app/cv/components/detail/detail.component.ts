import { Component, Input, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';
import { EmbaucheService } from './../../../embauche/services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.selectPersonneSubject
      .pipe(distinctUntilChanged())
      .subscribe((personne) => (this.personne = personne));
  }
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      alert(`${this.personne.name} est déjà embauché`);
    }
  }
}
