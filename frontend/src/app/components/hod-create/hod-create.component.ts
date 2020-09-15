import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-hod-create',
  templateUrl: './hod-create.component.html',
  styleUrls: ['./hod-create.component.css']
})
export class HodCreateComponent implements OnInit {
  
  submitted = false;
  playerForm: FormGroup;
  Dept:any = [];
  Employee:any = [];
  Teachers:any = [];
  HOD:any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
    this.readDept();
    this.readEmployee();
  }

  ngOnInit() { }

  readDept(){
    this.apiService.getDept().subscribe((data) => {
     this.Dept = data;
     for (let i = 0; i < this.Dept.length; i++)
     {
      if (this.Dept[i].teacher == null)
      {
        this.HOD.push(this.Dept[i]);
      }
     }
    })    
  }

  readEmployee(){
    this.apiService.getTeachers().subscribe((data) => {
     this.Employee = data;
     for (let i = 0; i < this.Employee.length; i++)
    {
     if (this.Employee[i].role == 2 && this.Employee[i].hod == false)
     {
       this.Teachers.push(this.Employee[i]);
     }
    }
    })    
  }

  mainForm() {
    this.playerForm = this.fb.group({
      dept: [''],
      teacher: ['']
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
      this.apiService.HODRegister(this.playerForm.value).subscribe(
        (res) => {
          console.log('HOD successfully selected!')
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
