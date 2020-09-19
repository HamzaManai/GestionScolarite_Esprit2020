
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-hod',
  templateUrl: './sidebar-hod.component.html',
  styleUrls: ['./sidebar-hod.component.css']
})
export class SidebarHodComponent implements OnInit {



  ngOnInit(): void {
  }

  MyGames:any=[];
  constructor(public apiService: ApiService,private router: Router) {

  }
  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }

}
