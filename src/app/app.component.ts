import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'costanacci';
  fibonacci = 1;

  constructor() {
    console.log(
      '%cBy %cBit %cNovaSoft \n%cwww.BitNovaSoft.com',
      'font-size:25px;color:white;text-shadow: 2px 3px black;background-color:black',
      'font-size:50px;color:#FF4542;text-shadow: 2px 3px black;background-color:black',
      'font-size:50px;color:#0096fe;text-shadow: 2px 3px black;background-color:black',
      'font-size:30px');
  }

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
