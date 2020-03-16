import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs: ['curso'] //outra forma de declrar input property
})
export class InputPropertyComponent implements OnInit {

  @Input() curso: string;

  constructor() { }

  ngOnInit() {
  }

}
