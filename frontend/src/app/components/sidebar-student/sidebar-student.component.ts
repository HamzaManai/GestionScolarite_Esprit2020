import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar-student.component.html',
  styleUrls: ['./sidebar-student.component.css']
})
export class SidebarStudentComponent implements OnInit {


  constructor(public apiService: ApiService,private router: Router) {

  }

  ngOnInit(): void {
  }


  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }
}
