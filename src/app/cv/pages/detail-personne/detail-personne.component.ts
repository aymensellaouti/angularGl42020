import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getPersonneByID(+params.id).subscribe(
        (personne) => (this.personne = personne),
        (erreur) => {
          this.toaster.error('Personne innexistante');
          this.router.navigate(['cv']);
        }
      );
    });
  }
  deletePersonne() {
    this.cvService.deletePersonneByID(this.personne.id).subscribe(
      (data) => {
        this.toaster.success(
          `${this.personne.firstname} ${this.personne.name} a été supprimé avec succès`
        );
        this.router.navigate(['cv']);
      },
      (erreur) => this.toaster.error('Problème lors de la suppression')
    );
  }
}
