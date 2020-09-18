import { Employee } from './../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {


  submitted = false;
  editForm: FormGroup;
  studentData: Employee[];

constructor(
  public fb: FormBuilder,
  private actRoute: ActivatedRoute,
  private apiService: ApiService,
  private router: Router
) {}

ngOnInit() {
  this.updateEmployee();
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.getEmployee(id);
  this.editForm = this.fb.group({
    firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        DateNaiss: ['', [Validators.required]],
        tlf: ['', [Validators.required]],
        email: ['', [Validators.required]]
  })
}

// Getter to access form control
get myForm() {
  return this.editForm.controls;
}

getEmployee(id) {
  this.apiService.getEmployee(id).subscribe(data => {
    this.editForm.setValue({
      firstname: data['firstname'],
      lastname: data['lastname'],
      DateNaiss: data['DateNaiss'],
      tlf: data['tlf'],
      email: data['email']
    });
   
  });
}

updateEmployee() {
  this.editForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    DateNaiss: ['', [Validators.required]],
    tlf: ['', [Validators.required]],
    email: ['', [Validators.required]]
  })
}

onSubmit() {
  this.submitted = true;
  if (!this.editForm.valid) {
    return false;
  } else {
    if (window.confirm('Are you sure?')) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.apiService.updateEmployee(id, this.editForm.value)
        .subscribe(res => {
          this.router.navigateByUrl('/studentList');
          console.log('Content updated successfully!')
        }, (error) => {
          console.log(error)
        })
    }
  }
}

}

