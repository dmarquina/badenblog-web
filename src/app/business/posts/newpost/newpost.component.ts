import { Component, OnInit } from '@angular/core';
import { INewpost, IPostFeed } from '../../../interfaces/post';
import { ICategory } from '../../../interfaces/category';
import { Router } from '@angular/router';
import { RestController } from '../../../commons/util/rest.controller';
import { FormControl, Validators } from '@angular/forms';
import swal from'sweetalert2';

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
    this.newPost.minAge=7;
    this.newPost.materials=[];
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
  
  publishPost(){
    this.newPost.name=this.titleFormControl.value;
    this.newPost.description=this.descriptionFormControl.value;
    this.newPost.categories = this.categories
    .filter(c => c.checked)
    .map(c=> {
      delete c['checked'];
      return {
        id: c.id,
        name : c.name
      }
    });
    if(this.newPost.materials.length==0){
      this.newPost.materials.push('No es necesario');
    }
    if(this.validateNewPost(this.newPost)){
      this._rest.post<INewpost>('/post/',this.newPost)
      .subscribe(
        data=>{
          swal('¡Guardado exitosamente!','Gracias por enseñarnos '+this.newPost.name , 'success');
          this.goBackFeed();
        },
        error=>{
          this.showError(error);
        }
      )
    }
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

  validateNewPost(newPost:INewpost){
    if(!newPost.categories || newPost.categories.length==0){
      swal({
        title: 'Oye...',
        text: "Debes seleccionar al menos una categoría",
        type: 'warning',
        confirmButtonColor: '#00897b',
      });
      return false;
    }
    return true;
  }

  goBackFeed(){
    this.router.navigate(['/postfeed'])
  }

  showError(error){
    console.log(error);
  }
}
