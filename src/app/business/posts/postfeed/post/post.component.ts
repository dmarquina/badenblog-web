import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post:any;

  spaceScreens: Array<any>;

  constructor(){}

  likeMe() {
    if (this.post.liked == 0){
      this.post.liked = 1;
      this.post.icon="favorite_border";
    }else{
      this.post.liked = 0;
      this.post.icon="favorite";
    }
  }

  ngOnInit() {
    this.likeMe();
  }

}
