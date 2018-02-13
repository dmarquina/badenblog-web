import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers: [AuthenticationService]
})
export class EmailComponent implements OnInit {
  state: string = '';
  error: any;
  email="";
  password="";
  disableLogin=false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }


  login(){
    this.disableLogin=true;
    this.authenticationService.login(this.email, this.password)
      .then(result => {
          if (result == true) {
              this.authenticationService.showUserInformation(this.email)
                  .then(
                      data=>{
                          localStorage.setItem('currentUser', JSON.stringify(data));
                          this.router.navigate(['/']);
                          },
                      error => this.showError()
                  );
          } else {
              this.showWarning();
              this.disableLogin=false;
              this.password="";
          }
      }).catch(
        (err) => {
        this.error = err;
        this.showError();
        this.disableLogin=false;
        this.password="";
      });
  }

  showWarning() {
    console.log("warning");
  }

  showError(){
    console.log("warning");
  }

  ngOnInit() {
  }

}
