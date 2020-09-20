import { Router } from '@angular/router';
import {  ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-agent-scolarite-messagerie',
  templateUrl: './agent-scolarite-messagerie.component.html',
  styleUrls: ['./agent-scolarite-messagerie.component.css']
})
export class AgentScolariteMessagerieComponent implements OnInit {
  Complaints:any=[]

  constructor( public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) {}

  ngOnInit(): void
  {
    this.apiService.getAllComplaints().subscribe((data) => {

      this.Complaints = data;

     })
  }

  resolveComplaint(id)
  {
    this.apiService.updateComplaint(id).subscribe((data) => {
      this.ngZone.run(() => this.router.navigateByUrl('/AgentSC/main'))

     })

  }


}
