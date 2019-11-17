import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres()
      .then(res => {
        console.log('termino', res);
      })
      .catch(err => {
        console.error('error', err);
      });
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let contador = 0;

      const intervalo = setInterval(() => {
        contador++;

        console.log(contador);

        if (contador === 3) {
          clearInterval(intervalo);
          resolve(true);
        }
      }, 1000);
    });
  }
}
