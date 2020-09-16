import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {

  submitted = false;
  playerForm: FormGroup;
  Dept:any = [];

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

  mainForm() {
    this.playerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      DateNaiss : [''],
      tlf : [''],
      email : [''],
      role: 2,
      hod: false,
      admin: false,
      dept: ['']
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
      this.apiService.Register(this.playerForm.value).subscribe(
        (res) => {
          console.log('Teacher successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('teacherList'))
        }, (error) => {
          // this.router.navigateByUrl('/login')
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }

}
