import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-scolarite-list',
  templateUrl: './agent-scolarite-list.component.html',
  styleUrls: ['./agent-scolarite-list.component.css']
})
export class AgentScolariteListComponent implements OnInit {

  Employee:any = [];
  Agents:any = [];
  Dept:any = [];

  constructor(private apiService: ApiService, private router: Router) { 
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getUsersByRole(4).subscribe((data) => {
     this.Agents = data;
     

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
