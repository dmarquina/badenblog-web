import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-materialchips',
  templateUrl: './materialchips.component.html',
  styleUrls: ['./materialchips.component.css']
})
export class MaterialchipsComponent implements OnInit {

  @Input() items ;
  constructor() {}

  ngOnInit() {
  }
  
}
