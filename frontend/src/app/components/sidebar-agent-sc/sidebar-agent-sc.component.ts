import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar-agent-sc',
  templateUrl: './sidebar-agent-sc.component.html',
  styleUrls: ['./sidebar-agent-sc.component.css']
})
export class SidebarAgentSCComponent implements OnInit {

  constructor(public apiService: ApiService,private router: Router) {

  }

  ngOnInit(): void {
  }


  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }
}
