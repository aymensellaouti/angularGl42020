import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor() {}

  ngOnInit(): void {}
}
