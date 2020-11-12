import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private loggerService: LoggerService) {
    this.loggerService.logger('Je suis le appComponent');
  }
  title = 'gl42020';
}
