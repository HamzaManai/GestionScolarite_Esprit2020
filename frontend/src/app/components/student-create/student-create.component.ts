import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";;

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  submitted = false;
  playerForm: FormGroup;
  Dept:any = [];
  courses:any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
    this.readDept();
  }

  ngOnInit() { }

  readDept(){
    this.apiService.getDept().subscribe((data) => {
     this.Dept = data;
    })
  }

  getCourses(){
    this.apiService.getCourses().subscribe((data) => {
      this.courses = data;
     })
  }

  mainForm() {
    this.playerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      DateNaiss : [''],
      tlf : [''],
      email : [''],
      role: 1,
      hod: false,
      admin: false

    })
  }


  // Getter to access form control
  get myForm(){
    return this.playerForm.controls;
  }

  onSubmit() {

    this.submitted = true;



    if (!this.playerForm.valid) {
      return false;
    } else {
      this.apiService.RegisterStudent(this.playerForm.value).subscribe(
        (res) => {
          console.log('Student successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/admin/main'))
        }, (error) => {
          // this.router.navigateByUrl('/login')
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }

}
