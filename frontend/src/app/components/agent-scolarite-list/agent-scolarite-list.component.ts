import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agent-scolarite-list',
  templateUrl: './agent-scolarite-list.component.html',
  styleUrls: ['./agent-scolarite-list.component.css']
})
export class AgentScolariteListComponent implements OnInit {

  Employee:any = [];
  Agents:any = [];
  Dept:any = [];

  constructor(private apiService: ApiService, private router: Router,private toastService:ToastrService) { 
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getUsersByRole(4).subscribe((data) => {
     this.Agents = data;
     

    })  
  }



   removeEmployee(id,index) {
    if(window.confirm('Vous étre sûre?')) {
      this.apiService.delete(id).subscribe((res) => {
        this.Agents.splice(index,1)
        this.toastService.success("Agent de scolarité supprimé!")
       },
       err => {
         this.toastService.error("Error")
         console.error(err)
       })  
    }
  }

}
