
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';

import { ApiService } from './../../service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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


  constructor(private auth: ApiService, private router: Router, private snackBar: MatSnackBar) {
   }
  public submit() {
    this.login();
    }
// Admin 0: Student 1: Teacher 2: agent examen: 3 agent scolarité: 4   /*lOGIN WASS*/

  login(): void {

    this.auth.sendCredential(this.username, this.password).subscribe(
      data => {
        console.log(data);
       // this.token.saveToken(data.token);
        localStorage.setItem('account', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        this.snackBar.open('Connected Sucessfully ');
        if (data.user.role === 0) {
          this.router.navigate(['admin/main']);
        }
        else if (data.user.role === 1) {
          this.router.navigate(['student/main']);
        }
        else if (data.user.role === 2) {
          this.router.navigate(['teacher/main']);
        }
        else if (data.user.role === 2 && data.user.hod === true) {
          this.router.navigate(['hod/main']);
        }
        else if (data.user.role === 3) {
          this.router.navigate(['agentScol/main']);
        }
        else if (data.user.role === 4) {
          this.router.navigate(['agentExam/main']);
        }
      },
      error => {
        console.log(error);
        this.snackBar.open('Failed to connect');
      },
    );


  }

}

