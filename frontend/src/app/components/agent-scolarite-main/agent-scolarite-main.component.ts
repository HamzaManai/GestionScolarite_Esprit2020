import { ApiService } from './../../service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-scolarite-main',
  templateUrl: './agent-scolarite-main.component.html',
  styleUrls: ['./agent-scolarite-main.component.css']
})
export class AgentScolariteMainComponent implements OnInit {
  messageform: FormGroup;

  constructor(    private apiService: ApiService,
    ) {
    this.messageform = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(JSON.parse(localStorage.getItem('account')).username),
    });
  }
ngOnInit(): void {
}

sendMessage() {
  console.log(this.messageform.value);
  this.apiService.apiPost(`/add`, this.messageform.value).subscribe(response => {
    console.log(response);
    this.messageform.reset();
  });

}

}
