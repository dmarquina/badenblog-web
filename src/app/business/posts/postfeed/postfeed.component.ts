import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Http } from '@angular/http';
import { IPost, Post } from '../../../interfaces/post';
import { RestController } from '../../../commons/util/rest.controller';
import { Observable } from 'rxjs/Observable';
import { ICategory } from '../../../interfaces/category';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent implements OnInit {
  searcherFormControl = new FormControl(null);
  searchField='';
  posts:Post[];
  categories:ICategory[];
  itemsPerPage:number;
  totalItems:number;
  pendingRequest=false;
  nopostsFound=false;
  progressspinnerMode = 'indeterminate';
  pageState:string='';

  constructor(private _rest : RestController) { 
  }
  
  ngOnInit() {
    this.getCategories();
    this.getPosts();
    this.searcherFormControl.valueChanges.subscribe( x => {
      if(x===''){
        this.getPosts();
      }
    })
  }
  
  getCategories(){
    this._rest.get<ICategory[]>('/category/')
    .subscribe(
      data=>{
        this.categories=data;
      },
      error => {
        this.showError(error);
      }
    )
    
  }
  
  getPosts(pageState=''){
    this.pendingRequest=true;
    this._rest.getPaginationResponse('/post/home/',pageState)
    .subscribe(
      data=>{
        if(data){
          if(data.headers.get('pageState')){
            this.pageState = data.headers.get('pageState');
          }else{
            this.pageState = '';
          }
          if(data.body){
            this.nopostsFound=false;
            if(this.posts && this.posts.length){
              this.posts = this.posts.concat(data.body);
            }else{
              this.posts = data.body;
            }
          }else{
            this.nopostsFound=true;
          }
        }
        this.pendingRequest=false;
      },
      error => {
        this.showError(error);
      }
    )
  }

  handleMoreItems(){
    this.getPosts(this.pageState);
  }

  searchPosts(searchField, page=0){
   /* this.pendingRequest=true;
    this.inSearch=false;
    this._rest.get<IPostfeed>(`/post/search/${searchField}?page=${page}`)
    .subscribe(
      
        error => {
          this.showError();
        }
    )*/
  }

  clearFilters(){
    this.searcherFormControl.setValue('');
    this.getPosts();
  }

  handleCurrentPage(currentPage){
    currentPage--;
    if(this.searcherFormControl 
      && this.searcherFormControl.value 
      && this.searcherFormControl.value!==''){
      this.searchPosts(this.searcherFormControl.value,currentPage);  
    }else{
      this.getPosts(currentPage)
    }
  }

  handleSearchEvent(){
    this.searchField=this.searcherFormControl.value;
    this.searchPosts(this.searcherFormControl.value);
  }
  showError(error) {
     console.log(error);
  }

}
