import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestController} from '../../../commons/util/rest.controller';
import swal from 'sweetalert2';
import { IScheduleFeed } from '../../../interfaces/schedule';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-schedulefeed',
  templateUrl: './schedulefeed.component.html',
  styleUrls: ['./schedulefeed.component.css']
})
export class SchedulefeedComponent implements OnInit {

  public scheduleFeed: IScheduleFeed[];

  constructor(private router: Router, 
              private _rest: RestController,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.loadUserSchedules();
  }

  goBackFeed() {
    this.router.navigate(['/postfeed']);
  }

  loadUserSchedules(){
    const userId = this.authService.currentUserId;
    this._rest.get<IScheduleFeed[]>('/schedule/' + userId)
      .subscribe(
        data => {
          this.scheduleFeed = data;
        },
        error => {
          this.showError(error);
        }
      );
  }

  showError(error) {
    console.log(error);
  }
}
