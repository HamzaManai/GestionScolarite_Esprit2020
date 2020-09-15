import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-class-enroll-teacher',
  templateUrl: './class-enroll-teacher.component.html',
  styleUrls: ['./class-enroll-teacher.component.css']
})
export class ClassEnrollTeacherComponent implements OnInit {


  submitted = false;
  editForm: FormGroup;
  studentForm: FormGroup;
  Teacher: any= [];
  teachers: any=[];
  realTeacher:any=[];
  dupTeacher:any=[];
  teacherIds: any=[];
  Clas: any= [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

   removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

  ngOnInit() {
    this.updateDept();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getClass(id);
    
  // this.getTeachers();
  // this.NoDups();
    this.editForm = this.fb.group({
      teacher: ['', [Validators.required]]
    })
    this.studentForm = this.fb.group({
      Teachclasses: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTeachers(){
    this.apiService.getTeachers().subscribe((data) => {
      this.Teacher = data;
      this.dupTeacher=data;
     })    
   
    
  }

  getClass(id){
    this.apiService.getClassStuds(id).subscribe((data) => {
      this.Clas = data;
      this.apiService.getTeachers().subscribe((data) => {
        this.Teacher = data;
        this.dupTeacher=data;
        for( let teach of this.Teacher)
        {
          for(let gam of this.Clas.teachers)
          {
           if(gam.username==teach.username)
           {
           // alert("ss")
             this.realTeacher.push(teach);
             var index = this.dupTeacher.indexOf(teach);
             this.dupTeacher.splice(index, 1);
          
          //  break;
          
           }
         
    
          }
        
        }
        this.realTeacher=this.realTeacher.filter((item, i, ar) => ar.indexOf(item) === i);
       })    
    
     })   

  }

  getEmployee(id) {
    this.apiService.getDeptt(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name']
      });
     
    });
  }
  updateProfile(e){
    // this.playerForm.get('game').setValue(e, {
    //   onlySelf: true
    // })
    this.editForm.get('teacher').setValue(e, {
     
      onlySelf: true
    })

  }
  updateStudentIds()
  {
    
    for (let gam of this.teachers) {
      this.teachers.push(gam._id);
      
    }
   
  }

  NoDups(){
    for(let gam of this.Clas.teachers)
    {
    
      for(let teach of this.Teacher)
      {
       // alert("Yo")
       if(gam.username!=teach.username)
       {
         this.realTeacher.push(teach);
       }

      }
    
    }
  }

  updateStudentClass(data)
  {
 
    var data2={
      Teachclasses: data
    }
    JSON.parse(JSON.stringify(data2));
  
    for (let gam of this.teacherIds) {
      this.apiService.updateStudentClass(gam, data2)
      .subscribe(res => {
       
        console.log('Content updated successfully!')
      }, (error) => {
        console.log(error)
      })
      

    }
  }

  updateDept() {
    this.editForm = this.fb.group({
      teacher: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
  //  this.updateStudentIds();

    this.updateProfile(this.teacherIds);

    if (!this.editForm.valid) {
    
      return false;
    } else {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateClassTeacher(id, this.editForm.value)
          .subscribe(res => {       
            this.updateStudentClass(id);
            this.router.navigateByUrl('/hod/main');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      
    }
  }

}
