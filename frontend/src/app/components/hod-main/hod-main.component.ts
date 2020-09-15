import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod-main',
  templateUrl: './hod-main.component.html',
  styleUrls: ['./hod-main.component.css']
})
export class HodMainComponent implements OnInit {
  Schedule:any = [];
  Schedule1:any = [];
  Match:any= []
  Employee: any=[];
  Game: any="Game";
  Practice:any="Practice";

  MyGames:any=[];
  constructor(public apiService: ApiService,private router: Router) {

  }

  ngOnInit() {
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

}
