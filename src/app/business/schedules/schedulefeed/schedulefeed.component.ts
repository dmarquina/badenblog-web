import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestController} from '../../../commons/util/rest.controller';
import swal from 'sweetalert2';

@Component({
  selector: 'app-schedulefeed',
  templateUrl: './schedulefeed.component.html',
  styleUrls: ['./schedulefeed.component.css']
})
export class SchedulefeedComponent implements OnInit {
  constructor(private router: Router, 
              private _rest: RestController) {
  }

  ngOnInit() {
  }

  goBackFeed() {
    this.router.navigate(['/postfeed']);
  }
}
