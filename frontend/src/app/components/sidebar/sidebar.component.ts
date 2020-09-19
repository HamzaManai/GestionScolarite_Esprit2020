import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public apiService: ApiService,private router: Router) {

  }

  ngOnInit(): void {
  }
  /*
  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    } }*/

  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }

}
