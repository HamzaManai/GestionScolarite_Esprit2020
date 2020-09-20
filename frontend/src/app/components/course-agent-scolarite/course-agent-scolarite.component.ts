import { Router } from '@angular/router';
import {  ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-course-agent-scolarite',
  templateUrl: './course-agent-scolarite.component.html',
  styleUrls: ['./course-agent-scolarite.component.css']
})
export class CourseAgentScolariteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
