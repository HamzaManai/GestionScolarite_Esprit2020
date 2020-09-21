import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

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

  pForm: FormGroup;
  TS:any = [];
  Cours:any = [];
  currentUser:any = [];

  Ranks: any = ['Beginner', 'Medium', 'Advance'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private actRoute: ActivatedRoute,

  ) {

  }

  ngOnInit() {
    this.mainForm();
    this.readEmployee();
    this.readCourse();
    this.readCours();
  }


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


  readCours(){
    this.apiService.profile().subscribe(
      user => {
        this.currentUser = user._id
      },
      err => {
        console.error(err)
      }
    )
    this.apiService.getCourses().subscribe((data) => {
     this.Course = data;
console.log('data', this.Course);

     for (let i = 0; i < this.Course.length; i++)
     {
      if (this.Course[i].teacher._id == this.currentUser)
      {
        this.Teachers.push(this.Course[i]);
      }
     }
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
          window.location.reload();

          console.log('Course successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/courseManage'))

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

  removeCourse(id) {
    if(window.confirm('Are you sure?')) {
      this.apiService.removeCourses(id).subscribe((res) => {
      this.readCourse();
       },
       err => {
         console.error(err);
       })
    }

  }



}
