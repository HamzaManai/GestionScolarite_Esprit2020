import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-exam-list',
  templateUrl: './agent-exam-list.component.html',
  styleUrls: ['./agent-exam-list.component.css']
})
export class AgentExamListComponent implements OnInit {
  Employee:any = [];
  Agentx:any = [];


  constructor(private apiService: ApiService, private router: Router) { 
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getUsersByRole(3).subscribe((data) => {
     this.Agentx = data;
    
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