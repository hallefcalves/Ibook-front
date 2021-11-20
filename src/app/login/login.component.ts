import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api';

//import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | null = '';
  senha: string | null = '';
  token: string = '';
  pageFormLogin: FormGroup;
  route: ActivatedRoute;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private api:UserApiService, private r: Router) {
    this.route = router
    this.pageFormLogin = this.fb.group({ email: [this.email], senha: [this.senha] })
    this.rt = r
  }

  rt: Router;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['login'];
      this.senha = params['login'];
     });
  }

  validaLogin(){
    console.log(this.pageFormLogin.value)
    this.api.validaLogin(this.pageFormLogin.value).subscribe(data => {

      if(data.token!=null){
        this.token = data.token;
        this.api.fazLoginSession(data);
        console.log(data)
        console.log(this.token)
        this.rt.navigateByUrl('/biblioteca');
      }
      else{
           
      }
    });
    
  }
}
