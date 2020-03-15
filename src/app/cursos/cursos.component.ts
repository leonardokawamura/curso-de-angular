import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeDoPortal: string;
  cursos: Array<string> = ['java', 'php', 'javascript'];

  constructor() { 
    this.nomeDoPortal = "http://loiane.training";
  }

  ngOnInit() {
  }

}
