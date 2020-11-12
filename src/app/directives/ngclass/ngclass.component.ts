import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  @Input() defaultColor = 'green';
  allume = false;
  constructor() {}

  ngOnInit(): void {}
}
