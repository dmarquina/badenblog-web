import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialchips',
  templateUrl: './materialchips.component.html',
  styleUrls: ['./materialchips.component.css']
})
export class MaterialchipsComponent implements OnInit {

  items = ['Pizza', 'Pasta', 'Parmesan'];
  constructor() {}

  ngOnInit() {
  }
  
}
