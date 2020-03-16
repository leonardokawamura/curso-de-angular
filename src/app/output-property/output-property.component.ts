import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  valorInicial: number = 1;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementa() {
    this.valorInicial--;
    this.mudouValor.emit({valor: this.valorInicial});
  }

  incrementa() {
    this.valorInicial++;
    this.mudouValor.emit({valor: this.valorInicial});
  }

}
