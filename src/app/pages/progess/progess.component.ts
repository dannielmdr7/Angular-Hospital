import { Component } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgessComponent {
  progreso1 = 25;
  progreso2 = 35;

  get getProgreso1() {
    return `${this.progreso1}%`;
  }
  get getProgreso2() {
    return `${this.progreso2}%`;
  }
  cambioValorHijo(valor: number) {
    console.log('Heyy!!', valor);
  }
}
