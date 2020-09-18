import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  Employee:any = [];
  Teachers:any = [];
  Dept:any = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.readEmployee();
    this.readDept();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getTeachers().subscribe((data) => {
     this.Employee = data;
     for (let i = 0; i < this.Employee.length; i++)
    {
     if (this.Employee[i].role == 2)
     {
       this.Teachers.push(this.Employee[i]);
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
        this.router.navigateByUrl('/teacherList')
       },
       err => {
         console.error(err)
       })
    }
  }

}
