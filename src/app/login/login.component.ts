import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageFormLogin: FormGroup;

  constructor(private router: ActivatedRoute, private fb: FormBuilder, private api:UserApiService) {
    this.pageFormLogin = this.fb.group({ email: [''], password: [''] })
  }


  ngOnInit(): void {
  }

  createLogin(){
    console.log(this.pageFormLogin.value)
    this.api.createUser(this.pageFormLogin.value).subscribe(data => console.log(data));
  }
}
