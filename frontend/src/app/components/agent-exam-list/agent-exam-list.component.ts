import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agent-exam-list',
  templateUrl: './agent-exam-list.component.html',
  styleUrls: ['./agent-exam-list.component.css']
})
export class AgentExamListComponent implements OnInit {
  Employee:any = [];
  Agentx:any = [];
  date = new Date ();

  constructor(private apiService: ApiService, private router: Router ,private toastService:ToastrService) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getUsersByRole(3).subscribe((data) => {
     this.Agentx = data;

    })
  }


  removeEmployee(id,index) {
    if(window.confirm('Vous étre sûre?')) {
      this.apiService.delete(id).subscribe((res) => {
        this.Agentx.splice(index,1)
        this.toastService.success("Agent de service examen supprimé!")
       },
       err => {
         this.toastService.error("Error")
         console.error(err)
       })
    }
  }
}
