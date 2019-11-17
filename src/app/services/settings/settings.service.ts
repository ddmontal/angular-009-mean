import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SettingsService {
  ajustes: Ajustes = { temaUrl: 'assets/css/colors/default.css', tema: 'default' };

  // tslint:disable-next-line: variable-name
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    const ajustes = localStorage.getItem('ajustes');

    if (ajustes) {
      this.ajustes = JSON.parse(ajustes);
      this.aplicarTema(this.ajustes.tema)
    } else {
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(theme: string) {
    const themeUrl = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', themeUrl);

    this.ajustes.tema = theme;
    this.ajustes.temaUrl = themeUrl;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
