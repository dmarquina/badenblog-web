import { Component, OnInit } from '@angular/core';
import { ICategory, INewpost } from '../../../interfaces/post'
import { Router } from '@angular/router';
import { RestController } from '../../../commons/util/rest.controller';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  newPost:INewpost= <INewpost> {};
  categories:ICategory[];

  age1=false;
  age2=false;
  age3=false;
  age4=false;

  items = [];
  
  constructor(private router: Router,private _rest : RestController ) { }

  ngOnInit() {
    this.getCategories();
    this.newPost.materials=[];
  }
  
  getCategories(){
    this._rest.get<ICategory[]>('/category/all')
    .subscribe(
      data=>{
        if(data){
          console.log(data)
          this.categories=data.content;
        }
      },
      error => {
        this.showError();
      }
    )
    
  }
  
  publishPost(){
    console.log(this.newPost);
  }
  
  handleItemAddedEvent(ev){
    this.newPost.materials.push(ev.value);
  }
  
  handleItemRemovedEvent(ev){
    let index = this.newPost.materials.indexOf(ev.value);
    if(index > -1) {
      this.newPost.materials.splice(index, 1);
    }
  }

  goBackFeed(){
    this.router.navigate(['/postfeed'])
  }

  showError(){
    console.log('hubo un error');
  }
}
