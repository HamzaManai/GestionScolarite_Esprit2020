import { Router } from '@angular/router';
import { userData, ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";;
@Component({
  selector: 'app-agent-exam-create',
  templateUrl: './agent-exam-create.component.html',
  styleUrls: ['./agent-exam-create.component.css']
})
export class AgentExamCreateComponent implements OnInit {
  submitted = false;
  playerForm: FormGroup;
 


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();

  }

  ngOnInit() { }




  mainForm() {
    this.playerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      DateNaiss : [''],
      tlf : [''],
      email : [''],
      role: 3,
      hod: false,
      admin: false

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
      this.apiService.RegisterStudent(this.playerForm.value).subscribe(
        (res) => {
          console.log('Agent de service examen ajouté!')
          this.ngZone.run(() => this.router.navigateByUrl('/admin/main'))
        }, (error) => {
          // this.router.navigateByUrl('/login')
          alert(error);
          console.log(error);
          console.exception("ss");
        });
    }
  }

}
