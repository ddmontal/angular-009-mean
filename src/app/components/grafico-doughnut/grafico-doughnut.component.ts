import { Component, OnInit, Input } from '@angular/core';
import { GraphData } from './graph-data.interface';

@Component({
  selector: 'app-grafico-doughnut',
  templateUrl: './grafico-doughnut.component.html',
  styleUrls: ['./grafico-doughnut.component.scss']
})
export class GraficoDoughnutComponent implements OnInit {

  @Input() graphData: GraphData;

  constructor() { }

  ngOnInit() {

  }

}
