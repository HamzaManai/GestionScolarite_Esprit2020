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
  Teachers:any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.readEmployee();

    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      teacher: ['',Validators.required]
    });
  }



  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  readEmployee(){
    this.apiService.getUsersByRole(2).subscribe((data) => {
     this.Teachers = data;
     console.log
    })
  }
  getEmployee(id) {
    this.apiService.getDeptt(id).subscribe(data => {
      this.editForm.setValue({
        name: data.name
      });

    });
  }


  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
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
