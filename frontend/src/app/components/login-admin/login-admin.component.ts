
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';

import { ApiService } from './../../service/api.service';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  public username: string;
  public password: string;
  public error: string;
  Employee:any = [];
  Teachers:any = [];
  Admins:any = [];
  HODs:any = [];
  Students:any= [];

  constructor(private auth: ApiService, private router: Router) {
    this.readEmployee();
    this.readStudents();
    this.readAdmins();
   }

   readStudents(){
      this.auth.getAllStudents().subscribe((data) => {
        this.Students=data;
    }) 
   }

   readAdmins(){
    this.auth.getAdmins().subscribe((data) => {
      this.Admins = data;
    })
 }

   readEmployee(){
    this.auth.getTeachers().subscribe((data) => {
     this.Employee = data;

      for (let i = 0; i < this.Employee.length; i++)
      {
      if (this.Employee[i].role == 2 && this.Employee[i].hod == false)
      {
        this.Teachers.push(this.Employee[i]);
      }
      }

      for (let i = 0; i < this.Employee.length; i++)
      {
      if (this.Employee[i].role == 2 && this.Employee[i].hod == true)
      {
        this.HODs.push(this.Employee[i]);
      }
      }
    })
  }

  public submit() {
    
    for (let i = 0; i < this.Admins.length; i++)
    {
    
      if (this.Admins[i].username == this.username)
      {
        
        this.auth.login(this.username, this.password)
        .pipe(first())
        .subscribe(
       
          result => this.router.navigate(['admin/main']),
          err => this.error = 'Could not authenticate'
         
        );
      }
    }

    for (let i = 0; i < this.Teachers.length; i++)
    {
    if (this.Teachers[i].username == this.username)
    {
      this.auth.loginTeacher(this.username, this.password)
      .pipe(first())
      .subscribe(
     
        result => this.router.navigate(['teacher/main']),
        err => this.error = 'Could not authenticate'
       
      );
    }
  }

 

  for (let i = 0; i < this.HODs.length; i++)
  {
    if (this.HODs[i].username == this.username)
    {
      this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
     
        result => this.router.navigate(['hod/main']),
        err => this.error = 'Could not authenticate'
       
      );
    }
  }

  for (let i = 0; i < this.Students.length; i++)
  {

    if (this.Students[i].username == this.username)
    {
      this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
     
        result => this.router.navigate(['student/main']),
        err => this.error = 'Could not authenticate'
       
      );
    }

  }
    
  }
}

