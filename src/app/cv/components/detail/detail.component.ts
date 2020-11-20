import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheService } from './../../../embauche/services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {}
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      alert(`${this.personne.name} est déjà embauché`);
    }
  }
}
