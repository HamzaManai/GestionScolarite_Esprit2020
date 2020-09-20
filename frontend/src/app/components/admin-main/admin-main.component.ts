import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';



import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  
  Employee: any=[];
  
  

  constructor(public apiService: ApiService,private router: Router) { 

  }

  readEmployee(){
    this.apiService.getUsersByRole(0).subscribe((data) => {
     this.Employee = data[0];
     console.log
    })    
  }

  ngOnInit() {
    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
          $("#navigation").toggleClass("hidden-xs");
      });
   });
   this.readEmployee()
  }


  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }
 


 


}
