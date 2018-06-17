import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../interfaces/post';
import { RestController } from '../../../commons/util/rest.controller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.css']
})
export class DetailpostComponent implements OnInit {

  post:IPost={};

  constructor(private route:ActivatedRoute, private router: Router,private _rest : RestController) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.getPost(params.id));
  }


  getPost(id){
    this._rest.get<IPost>('/post/'+id)
    .subscribe(
      data=>{
        this.post=data;
    },
    error => {
      this.showError(error);
    }
  )
  }
  goBackPostFeed(){
    this.router.navigate(['/postfeed'])
  }

  showError(error) {
    console.log(error);
  }
}
