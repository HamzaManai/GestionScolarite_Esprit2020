import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  Dept:any = [];
  Employee:any = [];
  Teachers:any = [];
  HOD:any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService ,
    private router: Router
  ) {
    this.readEmployee();
  }

  ngOnInit() {
    this.updateDept();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      teacher : ['']
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getDeptt(id).subscribe(data => {
      this.editForm.setValue({
        name: data.name
      });

    });
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


  updateDept() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      teacher : ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
       let id = this.actRoute.snapshot.paramMap.get('id');
     //  id = this.readEmployee();
        this.apiService.updateDept(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/deptCreate');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
