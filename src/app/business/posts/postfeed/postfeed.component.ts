import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Http } from '@angular/http';
import { PostfeedResponse } from '../../../interfaces/post';
import { Post } from '../../../interfaces/post';
import { RestController } from '../../../commons/util/rest.controller';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent implements OnInit {
  searcherFormControl = new FormControl(null);
  searchField='';
  postfeedResponse: PostfeedResponse;
  posts:Post[];
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
  }

  getPosts(page=0){
    this.pendingRequest=true;
    this.inSearch=false;
    this._rest.get<PostfeedResponse>(`/post/actives?page=${page}`)
      .subscribe(
        data=>{
          if(data){
          this.postfeedResponse=data;
          this.posts=this.postfeedResponse.content;
          this.totalItems=this.postfeedResponse.totalElements;
          this.itemsPerPage=this.postfeedResponse.size;
          this.pendingRequest=false;
          this.nopostsFound=false;
          }else{
            this.nopostsFound=true;
          }
        },
        error => {
          this.showError();
        }
      )
  }

  searchPosts(searchField, page=0){
    this.pendingRequest=true;
    this.inSearch=false;
    this._rest.get<PostfeedResponse>(`/post/search/${searchField}?page=${page}`)
    .subscribe(
      data=>{
        if(data){
          this.nopostsFound=false;
          this.postfeedResponse=data;
          this.posts=this.postfeedResponse.content;
          this.totalItems=this.postfeedResponse.totalElements;
          this.itemsPerPage=this.postfeedResponse.size;
          this.inSearch=true;
        }else{
            this.nopostsFound=true;
          }
          this.pendingRequest=false;
        },
        error => {
          this.showError();
        }
      )
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
  showError() {
     console.log("Error");
  }

}
