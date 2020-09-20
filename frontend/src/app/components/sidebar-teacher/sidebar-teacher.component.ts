import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrls: ['./sidebar-teacher.component.css']
})
export class SidebarTeacherComponent implements OnInit {

  constructor(public apiService: ApiService,private router: Router) {

  }
  ngOnInit(): void {
  }
  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }

}
