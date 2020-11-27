import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css'],
})
export class ObservableTestComponent implements OnInit {
  constructor() {}
  paths = ['404.png', 'as.jpg', 'cv.png', 'tim_logo.png'];
  observable: Observable;
  imageObservable: Observable<string>;
  ngOnInit(): void {
    this.observable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.error();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable.subscribe((val) => {
      console.log(val);
    });
    this.observable.subscribe(
      (data) =>
        console.log(
          'cc je suis le second observer et voici ce que j ai recu' + data
        ),
      (erreur) => console.log(erreur),
      () => console.log('flux finalisé')
    );
    this.imageObservable = new Observable<string>((observer) => {
      let indice = this.paths.length - 1;
      setInterval(() => {
        if (indice < 0) {
          indice = this.paths.length - 1;
        }
        observer.next(this.paths[indice--]);
      }, 1000);
    });
  }
}
