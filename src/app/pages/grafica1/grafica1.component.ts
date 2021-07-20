import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {


  public labels1: string[]= ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [
    [100, 5, 25]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
