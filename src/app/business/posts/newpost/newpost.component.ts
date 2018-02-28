import { Component, OnInit } from '@angular/core';
import { ICategory, INewpost, IPost } from '../../../interfaces/post'
import { Router } from '@angular/router';
import { RestController } from '../../../commons/util/rest.controller';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  newPost:INewpost= <INewpost> {};
  categories:ICategory[];

  items = [];

  titleFormControl = new FormControl(null,Validators.required);
  descriptionFormControl = new FormControl(null,Validators.required);

  constructor(private router: Router,private _rest : RestController ) { }

  ngOnInit() {
    this.getCategories();
    this.newPost.materials=[];
  }
  
  getCategories(){
    this._rest.get<ICategory[]>('/category/all')
    .subscribe(
      data=>{
        this.categories=data;
      },
      error => {
        this.showError();
      }
    )
    
  }
  
  publishPost(){
    this.newPost.title=this.titleFormControl.value
    this.newPost.description=this.descriptionFormControl.value
    this.newPost.categories = this.categories.filter(c => c.checked).map(c=> {delete c['checked'] ; return c;});
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
