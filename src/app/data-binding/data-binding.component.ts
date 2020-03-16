import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  urlImg = 'https://i.picsum.photos/id/330/200/300.jpg';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  pessoa: any = {
    nome: 'leonardo',
    idade: 36
  }
  nomeDoCurso: string = 'Angular';
  
  constructor() { }

  ngOnInit() {
  }

  getResult() {
    return 2;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValorChanged(event: any) {
    console.log(event);
  }

}
