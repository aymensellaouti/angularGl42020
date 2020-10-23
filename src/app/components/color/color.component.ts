import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'lightblue';
  color = this.defaultColor;

  constructor() {}
  changeColor(newColor: string) {
    this.color = newColor;
  }
  reset() {
    this.color = this.defaultColor;
  }
  ngOnInit(): void {}
}
