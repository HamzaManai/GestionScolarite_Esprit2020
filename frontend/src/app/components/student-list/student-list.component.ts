import { Component, OnInit } from '@angular/core';
import { userData, ApiService } from './../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Employee:any =[];
  Students:any = [];
  Dept:any = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {}

  readEmployee(){
    this.apiService.getTeachers().subscribe((data) => {
     this.Employee = data;
     for (let i = 0; i < this.Employee.length; i++)
    {
     if (this.Employee[i].role == 1)
     {
       this.Students.push(this.Employee[i]);
     }
    }
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
