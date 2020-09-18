import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  Employee:any = [];
  Teachers:any = [];
  Dept:any = [];

  constructor(private apiService: ApiService, private router: Router,private toastService:ToastrService) { 
    this.readEmployee();
    this.readDept();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getUsersByRole(2).subscribe((data) => {
     this.Teachers = data;
     console.log
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
        this.Teachers.splice(index,1)
        this.toastService.success("Enseignant supprimé!")
       },
       err => {
         this.toastService.error("Error")
         console.error(err)
       })  
    }
  }

}
