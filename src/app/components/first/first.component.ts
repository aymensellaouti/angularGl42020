import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  isHidden = false;
  name = 'aymen';
  color = 'yellow';
  constructor() {}
  sayHello() {
    alert('Hello :D');
  }
  hideShow(inputValue: string) {
    this.isHidden = !this.isHidden;
    console.log(inputValue);
  }
  ngOnInit(): void {}
}
