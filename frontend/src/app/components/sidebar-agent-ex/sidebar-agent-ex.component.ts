import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar-agent-ex',
  templateUrl: './sidebar-agent-ex.component.html',
  styleUrls: ['./sidebar-agent-ex.component.css']
})
export class SidebarAgentEXComponent implements OnInit {

  constructor(public apiService: ApiService,private router: Router) {

  }
  ngOnInit(): void {
  }
  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }

}
