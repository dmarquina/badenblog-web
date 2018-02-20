import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../../../interfaces/post';

@Component({
  selector: 'app-postscontainer',
  templateUrl: './postscontainer.component.html',
  styleUrls: ['./postscontainer.component.css']
})
export class PostscontainerComponent implements OnInit {
  @Input() posts:IPost[];
  @Input() itemsPerPage:number;
  @Input() totalItems:number;
  
  @Output() currentPage = new EventEmitter();

  constructor() {
  }
  
  pageChanged($event){
    this.currentPage.emit($event);
    return $event;
  }

  ngOnInit() {
  }

}
