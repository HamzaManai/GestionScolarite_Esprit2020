import { Router } from '@angular/router';
import {  ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-hod-complain-view',
  templateUrl: './hod-complain-view.component.html',
  styleUrls: ['./hod-complain-view.component.css']
})
export class HodComplainViewComponent implements OnInit {
  Complaints:any=[]

  constructor( public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) {}

  ngOnInit(): void
  {
    this.apiService.getAllComplaints().subscribe((data) => {

      this.Complaints = data;

     })
  }

  resolveComplaint(id)
  {
    this.apiService.updateComplaint(id).subscribe((data) => {
      this.ngZone.run(() => this.router.navigateByUrl('/hod/main'))

     })

  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['/login']);

}
}
