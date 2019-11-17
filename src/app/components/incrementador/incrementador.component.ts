import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;

  constructor() {}

  ngOnInit() {}

  cambiarValor(valor: number) {
    const suma = this.progreso + valor;

    if (suma >= 0 && suma <= 100) {
      this.progreso = suma;
      this.cambioValor.emit(this.progreso);
      this.txtProgress.nativeElement.focus();
    }
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }
}
