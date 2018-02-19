import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  age1=false;
  age2=false;
  age3=false;
  age4=false;

  items = ['Pizza', 'Pasta', 'Parmesan'];
  constructor() { }

  ngOnInit() {
  }

}
