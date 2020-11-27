import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'lightblue';
  color = this.defaultColor;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
  changeColor(newColor: string) {
    this.color = newColor;
  }
  reset() {
    this.color = this.defaultColor;
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametres) => {
        this.defaultColor = parametres.defaultColor;
        this.color = this.defaultColor;
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (qp) => console.log(qp)
    );

  }
}
