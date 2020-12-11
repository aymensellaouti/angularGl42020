import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public personnes: Personne[] = [];
  /*   @Output() forwardSelectedPersonne = new EventEmitter(); */
  constructor(private cvService: CvService, private toaster: ToastrService) {}
  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => (this.personnes = personnes),
      (erreur) => {
        this.toaster.warning(
          'Problème de connaxion à la base de données, les personnes sont fake'
        );
        this.personnes = this.cvService.getFPersonnes();
      }
    );
  }
  /*   forwardPersonne(selectedPersonne: Personne) {
    this.forwardSelectedPersonne.emit(selectedPersonne);
  } */
}
