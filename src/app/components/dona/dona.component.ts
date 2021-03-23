import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() titulo: string = 'Sin titulo';
  @Input() Labels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input() Data = [35, 50, 100];
  public colors: Color[] = [
    { backgroundColor: ['#1684e4', '#1d0a85', '#4dd110'] },
  ];
}
