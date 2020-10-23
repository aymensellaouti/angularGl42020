import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  color = 'red';
  @Input() dadFavoriteColor = 'unkown';
  @Input() name = 'fils';
  @Output() sendDataToSon = new EventEmitter();
  constructor() {}

  /*
    Créer un événement
    Je dois dire quand l'emettre
    Y associer la données à envoyer au parent
  */

  ngOnInit(): void {
  }
  sendData() {
    this.sendDataToSon.emit(this.color);
  }
}
