import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.css']
})
export class StudentClassComponent implements OnInit {
  Class:any=[];
  currentUser:any=[];
  apiService: any;
  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private authService: ApiService,
    private router: Router) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile11().subscribe(res => {

      this.currentUser = res;
      this.getClassDetails(this.currentUser.studClass._id);

      id=this.currentUser._id;

    //  this.router.navigate(['student/class/'+id]);
    })
    // this.authService.getClassStuds(this.currentUser.studClass._id).subscribe(res => {

    //   this.Class = res;
    //   alert(this.Class.name)

    // })

   }

   getClassDetails(id)
   {
    this.authService.getClassStuds(id).subscribe(res => {
      this.Class = res;

    })

   }

  ngOnInit(): void {
  // let ids=this.currentUser.studClass._id;
  // alert(ids)
  //   this.getClassDetails(this.currentUser.studClass);
  }
  logout() {
    this.apiService.logout()
    this.router.navigate(['/login']);
  }

}
