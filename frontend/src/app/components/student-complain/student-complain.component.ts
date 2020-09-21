import { Router } from '@angular/router';
import {  ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-student-complain',
  templateUrl: './student-complain.component.html',
  styleUrls: ['./student-complain.component.css']
})
export class StudentComplainComponent implements OnInit {
  moment = moment ;
  messages: any;

  submitted = false;
  playerForm: FormGroup;
  Complaints:any = [];
  Teachers:any = [];
  currentUser:any = [];
  id:any=[]
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();

    this.readMessages();
    this.apiService.getUserProfile11().subscribe(res => {
      this.currentUser = res;


     this.id=this.currentUser._id;

    })
  }

  ngOnInit() {
    this.getAllMessages();
    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
          $("#navigation").toggleClass("hidden-xs");
      });
   });
  // this.readMatch();

  }


  mainForm() {
    this.playerForm = this.fb.group({
      details: ['', [Validators.required]]
    })
  }

  readMessages(){
    this.apiService.getStudentComplaints().subscribe((data) => {
     this.Complaints = data;
    })

  }

  get myForm(){
    return this.playerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.playerForm.valid) {
      return false;
    } else {
      this.apiService.createComplaint(this.playerForm.value,this.id).subscribe(
        (res) => {
          console.log('Complaint successfully created!')
          window.location.reload();

          this.ngZone.run(() => this.router.navigateByUrl('student/complain'))
        }, (error) => {
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }
  getAllMessages() {
    this.apiService.apiGetAll(`/getAllMessages`).subscribe((response: any) => {
      this.messages = response;
  });
  console.log(this.messages);

  }




}

