import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-materialchips',
  templateUrl: './materialchips.component.html',
  styleUrls: ['./materialchips.component.css']
})
export class MaterialchipsComponent implements OnInit {
  @Output() itemAddedEvent = new EventEmitter();
  @Output() itemRemovedEvent = new EventEmitter();
  @Input() items ;

  constructor() {}

  ngOnInit() {}
  
  onItemAdded(event){
    this.itemAddedEvent.emit(event);
  }
  
  onItemRemoved(event){
    this.itemRemovedEvent.emit(event);
  }
}
