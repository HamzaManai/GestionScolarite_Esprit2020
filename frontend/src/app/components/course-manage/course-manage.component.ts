import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css']
})
export class CourseManageComponent implements OnInit {

  submitted = false;
  playerForm: FormGroup;
  Employee:any = [];
  Teachers:any = [];
  Course:any = [];
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
    this.readCourse();
  }

  ngOnInit() { }


  mainForm() {
    this.playerForm = this.fb.group({
      course: ['', [Validators.required]],
      credHr: ['', [Validators.required]],
      teacher: ['']
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

  readCourse(){
    this.apiService.getCourses().subscribe((data) => {
     this.Course = data;
     console.log('dara', data);

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

      this.apiService.courseRegister(this.playerForm.value).subscribe(
        (res) => {
          console.log('Course successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/hod/main'))
        }, (error) => {
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }
  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }

}
