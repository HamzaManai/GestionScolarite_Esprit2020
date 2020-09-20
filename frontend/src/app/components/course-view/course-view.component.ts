import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  submitted = false;
  playerForm: FormGroup;
  Teachers:any = [];
  Course:any = [];
  currentUser:any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.readCourse();

  }

  readCourse(){
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


}
