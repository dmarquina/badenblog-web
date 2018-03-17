import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Http } from '@angular/http';
import { IPostfeed } from '../../../interfaces/post';
import { IPost, Post } from '../../../interfaces/post';
import { RestController } from '../../../commons/util/rest.controller';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent implements OnInit {
  searcherFormControl = new FormControl(null);
  searchField='';
  postfeed: IPostfeed;
  posts:Post;
  itemsPerPage:number;
  totalItems:number;
  pendingRequest=false;
  nopostsFound=false;
  progressspinnerMode = 'indeterminate';
  inSearch=false;
  
  constructor(private _rest : RestController) { 
  }
  
  ngOnInit() {
    this.getPosts();
    this.searcherFormControl.valueChanges.subscribe( x => {
      if(x===''){
        this.getPosts();
      }
    })
  }
  
  getPosts(page=0){
    this.pendingRequest=true;
    this.inSearch=false;
    this._rest.getComments()
    //.map(d=>{console.log(d);return  d;})
      .subscribe(
        data=>{
            console.log(data);
        },
        error => {
          this.showError(error);
        }
      )
  }

  searchPosts(searchField, page=0){
   /* this.pendingRequest=true;
    this.inSearch=false;
    this._rest.get<IPostfeed>(`/post/search/${searchField}?page=${page}`)
    .subscribe(
      data=>{
        if(data){
          this.nopostsFound=false;
          this.postfeed=data;
          this.posts=this.postfeed.content;
          this.totalItems=this.postfeed.totalElements;
          this.itemsPerPage=this.postfeed.size;
          this.inSearch=true;
        }else{
            this.nopostsFound=true;
          }
          this.pendingRequest=false;
        },
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
