import { Router } from '@angular/router';
import {  ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-agent-scolarite-messagerie',
  templateUrl: './agent-scolarite-messagerie.component.html',
  styleUrls: ['./agent-scolarite-messagerie.component.css']
})
export class AgentScolariteMessagerieComponent implements OnInit {
  Complaints:any=[]
  messageform: FormGroup;


  constructor( public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) {
      this.messageform = new FormGroup({
        title: new FormControl(null, Validators.required),
        content: new FormControl(null, [Validators.email, Validators.required]),
        username: new FormControl(JSON.parse(localStorage.getItem('account')).username),
      });
    }

  ngOnInit(): void
  {
    this.apiService.getAllComplaints().subscribe((data) => {

      this.Complaints = data;

     })
  }

  resolveComplaint(id)
  {
    this.apiService.updateComplaint(id).subscribe((data) => {
      window.location.reload();

      this.ngZone.run(() => this.router.navigateByUrl('/AgentSC/messagerie'))

     })

  }
  sendMessage() {
    console.log(this.messageform.value);
    window.location.reload();

    this.apiService.apiPost(`/add`, this.messageform.value).subscribe(response => {
      console.log(response);
      this.messageform.reset();
      window.location.reload();

    });

  }

}
