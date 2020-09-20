import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-agent-examen-module',
  templateUrl: './agent-examen-module.component.html',
  styleUrls: ['./agent-examen-module.component.css']
})
export class AgentExamenModuleComponent implements OnInit {
  Course: any = [];
  Employee: any = [];
  Teachers: any = [];
  Dept: any = [];

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.readEmployee();
    this.readCourse();

  }

  readEmployee() {
    this.apiService.getTeachers().subscribe((data) => {
      this.Employee = data;
      for (let i = 0; i < this.Employee.length; i++) {
        if (this.Employee[i].role == 2) {
          this.Teachers.push(this.Employee[i]);
        }
      }
    })
  }

  readCourse() {
    this.apiService.getCourses().subscribe((data) => {
      this.Course = data;
      console.log('dara', data);

    })
  }

  updateCourse(id) {
    this.apiService.apiPut(`/updatestc/` + id, { "test" : true }).subscribe(
      (response: any) => {
        this.snackBar.open(JSON.stringify(response.message));
        this.readCourse();
      }
    );
  }
}
