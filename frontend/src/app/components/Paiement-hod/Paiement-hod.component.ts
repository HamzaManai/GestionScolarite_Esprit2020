import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-Paiement-hod',
  templateUrl: './Paiement-hod.component.html',
  styleUrls: ['./Paiement-hod.component.css']
})
export class PaiementhodComponent  implements OnInit {

  submitted = false;
  editForm: FormGroup;
  studentForm: FormGroup;
  Student: any= [];
  students: any=[];
  studentIds: any=[];
  Clas: any= [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateDept();
    let id = this.actRoute.snapshot.paramMap.get('id');
   this.getStudents();
    this.editForm = this.fb.group({
      student: ['', [Validators.required]]
    })
    this.studentForm = this.fb.group({
      studClass: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getStudents(){
    this.apiService.getStudents().subscribe((data) => {
      this.Student = data;
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
    this.editForm.get('student').setValue(e, {

      onlySelf: true
    })

  }
  updateStudentIds()
  {
    for (let gam of this.students) {
      this.studentIds.push(gam._id);


    }
  }

  updateStudentClass(data)
  {
    var data2={
      studClass: data
    }
    JSON.parse(JSON.stringify(data2));
    for (let gam of this.studentIds) {
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
      student: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    this.updateStudentIds();

    this.updateProfile(this.studentIds);

    if (!this.editForm.valid) {
      return false;
    } else {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateClass(id, this.editForm.value)
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
