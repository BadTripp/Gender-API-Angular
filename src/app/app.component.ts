import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Probabilità genere dal nome';
  show:boolean=false;
  txtBtn="Passa a convertitore EUR-BTC"
  cambiaVisual(){
    (!this.show)?this.txtBtn="Passa a genere nomi":this.txtBtn="Passa a convertitore EUR-BTC";
    (this.show)?this.title="Probabilità genere dal nome":this.title="Convertitore EUR/BTC"
    this.show=!this.show
  }
}
