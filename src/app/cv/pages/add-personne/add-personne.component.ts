import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private tostr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (personne) => {
        this.tostr.success(
          `${personne.firstname} ${personne.name} a été ajouté avec succès`
        );
        this.router.navigate(['cv']);
      },
      (error) =>
        this.tostr.error(
          'Problème au niveau ed la base de données, veuillez contacter l admin'
        )
    );
  }
}
