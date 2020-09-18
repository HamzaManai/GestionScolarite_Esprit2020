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
      DateNaiss : ['', [Validators.required]],
      tlf : ['', [Validators.required]],
      email : ['', [Validators.required]],
      role: 1,
      hod: false,
      admin: false,
      dept: ['',Validators.required]
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
          this.ngZone.run(() => this.router.navigateByUrl('studentList'))
        }, (error) => {
          // this.router.navigateByUrl('/login')
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }

}