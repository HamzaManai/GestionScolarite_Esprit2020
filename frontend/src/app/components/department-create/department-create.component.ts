import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  submitted = false;
  playerForm: FormGroup;
  Employee:any = [];
  Teachers:any = [];
  Dept:any = [];

  Ranks: any = ['Beginner', 'Medium', 'Advance'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
    this.readEmployee();
    this.readDept();
  }

  ngOnInit() { }


  mainForm() {
    this.playerForm = this.fb.group({
      deptname: ['', [Validators.required]]
    })
  }

  readEmployee(){
    this.apiService.getTeachers().subscribe((data) => {
     this.Employee = data;
     for (let i = 0; i < this.Employee.length; i++)
    {
     if (this.Employee[i].role == 2)
     {
       this.Teachers.push(this.Employee[i]);
     }
    }
    })
  }

  readDept(){
    this.apiService.getDept().subscribe((data) => {
     this.Dept = data;
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

      this.apiService.deptRegister(this.playerForm.value).subscribe(
        (res) => {
          console.log('Department successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/admin/main'))
        }, (error) => {
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }

  removeEmployee(id) {
    if(window.confirm('Are you sure?')) {
      this.apiService.deleteDept(id).subscribe((res) => {
        this.router.navigateByUrl('/admin/main')
       },
       err => {
         console.error(err)
       })
    }
  }



  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }




}

