import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {


  @Input() title: string = 'Sin titulo';
 // @Input() labels: string[]= [];


 @Input('labels') doughnutChartLabels: Label[] = ['label 1', 'label 2', 'label 3'];
 @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]= [
    {backgroundColor: ['#557ff6', '#c8b7f7', '#252933']}
  ];


  constructor() { }

  ngOnInit(): void {
   
  }

}
