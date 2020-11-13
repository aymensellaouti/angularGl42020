import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }
  catchSelectedPersonne(forwardedPersonne: Personne) {
    this.selectedPersonne = forwardedPersonne;
    this.todoService.logger();
  }

}
