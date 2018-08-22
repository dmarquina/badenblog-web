import {Component, Input, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: any;

  constructor(private router: Router ) {}

  likeMe() {
    if (this.post.liked == 0) {
      this.post.liked = 1;
      this.post.icon = 'favorite_border';
    } else {
      this.post.liked = 0;
      this.post.icon = 'favorite';
    }
  }

  addToSchedules(){
    this.router.navigate(['/myschedules']);
  }

  ngOnInit() {
    this.likeMe();
  }

}