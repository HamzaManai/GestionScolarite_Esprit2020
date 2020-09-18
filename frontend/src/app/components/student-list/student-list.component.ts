import { Component, OnInit } from '@angular/core';
import { userData, ApiService } from './../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Employee:any = [];
  Students:any = [];
  Dept:any = [];

  constructor(private apiService: ApiService, private router: Router) { 
    this.readEmployee();
    this.readDept();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getUsersByRole(1).subscribe((data) => {
     this.Students = data;
        })  
  }
  

  readDept(){
    this.apiService.getDept().subscribe((data) => {
     this.Dept = data;
    })    
  }

  removeEmployee(id) {
    if(window.confirm('Are you sure?')) {
      this.apiService.deleteEmployee(id).subscribe((res) => {
        this.router.navigateByUrl('/admin/main')
       },
       err => {
         console.error(err)
       })  
    }
  }

}
