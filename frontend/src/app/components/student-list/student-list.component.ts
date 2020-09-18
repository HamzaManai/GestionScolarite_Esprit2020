import { Component, OnInit } from '@angular/core';
import { userData, ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Employee:any = [];
  Students:any = [];
  Dept:any = [];

  constructor(private apiService: ApiService, private router: Router ,private toastService:ToastrService) { 
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

  removeEmployee(id,index) {
    if(window.confirm('Vous étre sûre?')) {
      this.apiService.delete(id).subscribe((res) => {
        this.Students.splice(index,1)
        this.toastService.success("Etudiant supprimé!")
       },
       err => {
         this.toastService.error("Error")
         console.error(err)
       })  
    }
  }
  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
}
