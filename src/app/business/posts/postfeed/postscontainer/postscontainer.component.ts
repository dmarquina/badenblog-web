import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { PostfeedResponse } from '../../../../interfaces/post';
import { Post } from '../../../../interfaces/post';

@Component({
  selector: 'app-postscontainer',
  templateUrl: './postscontainer.component.html',
  styleUrls: ['./postscontainer.component.css']
})
export class PostscontainerComponent implements OnInit {
  @Input() posts:Post[];
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
