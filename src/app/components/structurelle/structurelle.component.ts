import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurelle',
  templateUrl: './structurelle.component.html',
  styleUrls: ['./structurelle.component.css']
})
export class StructurelleComponent implements OnInit {
  bool = true;
  constructor() { }

  ngOnInit(): void {
  }
  inverse() {
    this.bool = ! this.bool;
  }

}
