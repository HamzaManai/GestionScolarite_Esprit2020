import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-teacher-class-view',
  templateUrl: './teacher-class-view.component.html',
  styleUrls: ['./teacher-class-view.component.css']
})
export class TeacherClassViewComponent implements OnInit {
  Class:any=[];
  Tclass:any=[];
  currentUser:any=[];
  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private authService: ApiService,
    private router: Router) {
    let id = this.actRoute.snapshot.paramMap.get('id');  
 
    this.authService.getUserProfile11().subscribe(res => {
      this.currentUser = res;
      this.getClassDetails(this.currentUser._id);
    
      id=this.currentUser._id;
  
    })
   
   
   }

   getClassDetails(id)
   {
  
    this.authService.getClasses().subscribe(res => {
      this.Class = res;
    
      for(let gam of this.Class)
      {
      
        for(let teach of gam.teachers)
        {
          if(id==teach._id)
          {
            this.Tclass.push(gam);
          }

        }

      }
   
    })

   }

  ngOnInit(): void {
  
  }

}
