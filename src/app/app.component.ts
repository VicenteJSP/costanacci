import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'costanacci';
  fibonacci = 1;

  calculaFibonacci(valor: number): number {
    console.log(valor);
    let fibonacci = 1;
    let ant = 0;
    let aux = 0;
    for (let i = 0; i < valor - 1; i++) {
      aux = fibonacci;
      fibonacci = ant + fibonacci;
      ant = aux;
    }
    return fibonacci;
  }
}
