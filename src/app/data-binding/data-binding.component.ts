import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  urlImg = 'https://i.picsum.photos/id/330/200/300.jpg';

  constructor() { }

  ngOnInit() {
  }

  getResult() {
    return 2;
  }

}
