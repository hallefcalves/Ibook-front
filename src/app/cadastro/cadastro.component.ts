import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  email: string | null = '';
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private api:UserApiService) {
    this.route = router
    this.pageForm = this.fb.group({ email: [this.email], senha: [''] })
  }
  pageForm: FormGroup;

  route: ActivatedRoute = new ActivatedRoute();

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     this.email = params['user'];
    });
    this.pageForm.setValue({
      email: this.email, 
      senha:''
    });
    //this.email = this.router.snapshot.paramMap.get('user');
  }

  createUser(){
    console.log(this.pageForm.value)
    this.api.createUser(this.pageForm.value).subscribe(data => console.log(data));
  }
}
