import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  private obs: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {
    this.obs = this.getObservable().subscribe(
      num => console.log('Subs', num),
      error => console.error('Error obs', error),
      () => console.log('Obs terminó')
    );
  }

  ngOnDestroy() {
    this.obs.unsubscribe();
  }

  getObservable(): Observable<any> {
    return new Observable<any>(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('2');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter(valor => valor % 2 === 1)
    );
  }
}
