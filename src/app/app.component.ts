import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tareaClaseS27';
  numero1!:number;
  numero2!:number;
  operacion!:string;
  resultado!:number | string

  multiplicar(num1:number, num2:number):number{
    // this.resultado = this.numero1 * this.numero2
    return this.resultado = num1 * num2
  }
}
