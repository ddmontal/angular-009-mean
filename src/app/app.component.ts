import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-adminpro';

  // tslint:disable-next-line: variable-name
  constructor(public _ajustes: SettingsService) {}
}
