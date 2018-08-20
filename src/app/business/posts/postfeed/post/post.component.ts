import {Component, Input, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: any;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  likeMe() {
    if (this.post.liked == 0) {
      this.post.liked = 1;
      this.post.icon = 'favorite_border';
    } else {
      this.post.liked = 0;
      this.post.icon = 'favorite';
    }
  }

  add(){
    console.log("holiu");
  }

  ngOnInit() {
    this.likeMe();
  }

}

@Component({
  selector: 'post.component-dialog',
  templateUrl: 'post.component-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    //public dialogRef: MatDialogRef<PostComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    //this.dialogRef.close();
  }

}