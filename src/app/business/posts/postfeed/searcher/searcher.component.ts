import { Component , Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  @Output() searchEvent = new EventEmitter();
  @Input() searcherFormControl = new FormControl(null)
  searchValueTemp='';
  
  constructor() { }

  searchPosts(){
    if(this.searcherFormControl.value!=this.searchValueTemp){
      this.searchEvent.emit();
      this.searchValueTemp=this.searcherFormControl.value;
    } 
  }

  searchDisabled(){
    return this.searcherFormControl;
  }
}
