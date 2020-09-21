import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {
  moment = moment ;
messages: any;
  constructor(public apiService: ApiService,private router: Router) {

  }

  ngOnInit() {
    this.getAllMessages();
    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
          $("#navigation").toggleClass("hidden-xs");
      });
   });
  // this.readMatch();
  }

  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }

  getAllMessages() {
    this.apiService.apiGetAll(`/getAllMessages`).subscribe((response: any) => {
      this.messages = response;
  });
  console.log(this.messages);

  }
}
