import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-agent-scolarite-main',
  templateUrl: './agent-scolarite-main.component.html',
  styleUrls: ['./agent-scolarite-main.component.css']
})
export class AgentScolariteMainComponent implements OnInit {

  Schedule:any = [];
  Schedule1:any = [];
  Match:any= []
  Employee: any=[];
  Game: any="Game";
  Practice:any="Practice";
  
  MyGames:any=[];
  constructor(public apiService: ApiService,private router: Router) { 

  constructor() { }

  ngOnInit(): void {
  }

}

export class AdminMainComponent implements OnInit {
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