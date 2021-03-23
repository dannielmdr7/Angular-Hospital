import { Component } from '@angular/core';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public Labels: Label[] = ['Ventas', 'In-Store Sales', 'Mail-Order Sales'];
  public Data = [344, 56, 70];
}
