import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";;
@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.css']
})
export class ClassCreateComponent implements OnInit {

  
  submitted = false;
  playerForm: FormGroup;
  Employee:any = [];
  Teachers:any = [];
  Dept:any = [];
  Course: any= [];
  courses: any=[];
  courseIds: any=[];
  Clas: any= [];


  Ranks: any = ['Beginner', 'Medium', 'Advance'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  
    //this.readEmployee();
   // this.readDept();
  }

  ngOnInit() { this.getCourses();
  this.getClass() }
  getCourses(){
    this.apiService.getCourses().subscribe((data) => {
      this.Course = data;
     })    
  }

  getClass(){
 
    this.apiService.getClasses().subscribe((data) => {
  
      this.Clas = data;
     })    
  }

  mainForm() {
    this.playerForm = this.fb.group({
      name: ['', [Validators.required]],
      course: ['', [Validators.required]],
    })
  }

  updateProfile(e){
    // this.playerForm.get('game').setValue(e, {
    //   onlySelf: true
    // })
    this.playerForm.get('course').setValue(e, {
     
      onlySelf: true
    })
  
  }
  updateCourseIds()
  {
    for (let gam of this.courses) {
      this.courseIds.push(gam._id);
      

    }
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
    this.updateCourseIds();
    this.updateProfile(this.courseIds);
   

    if (!this.playerForm.valid) {
      alert("false")
      return false;
    } else {
  
      this.apiService.createClass(this.playerForm.value).subscribe(
        (res) => {
          alert('Class successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/hod/main'))
        }, (error) => {
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }

 
}


