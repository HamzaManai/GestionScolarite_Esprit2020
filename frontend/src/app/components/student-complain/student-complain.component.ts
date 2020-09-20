import { Router } from '@angular/router';
import {  ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-student-complain',
  templateUrl: './student-complain.component.html',
  styleUrls: ['./student-complain.component.css']
})
export class StudentComplainComponent implements OnInit {

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

  ngOnInit() { }


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
          this.ngZone.run(() => this.router.navigateByUrl('/student/main'))
        }, (error) => {
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }


}

