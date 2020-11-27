import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-nest',
  templateUrl: './test-nest.component.html',
  styleUrls: ['./test-nest.component.css'],
})
export class TestNestComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/todo ')
      .subscribe((data) => console.log(data));
  }
}
