import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Token } from '../models/token';
import { UserApiService } from '../services/user-api';
import { BibliotecaApiService } from '../services/biblioteca-api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  email: string | null = '';
  senha: string | null = '';
  tipoUser: string="0";
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private apiUser:UserApiService,private apiBiblio:BibliotecaApiService, private r: Router) {
    this.route = router
    this.rt = r
    this.pageForm = this.fb.group({ email: [this.email], senha: [this.senha] })
  }
  pageForm: FormGroup;

  route: ActivatedRoute = new ActivatedRoute();
  rt: Router;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     this.email = params['user'];
     this.senha = params['user'];
    });
    this.pageForm.setValue({
      email: this.email, 
      senha:''
    });
    //this.email = this.router.snapshot.paramMap.get('user');
  }

  createUser(){
    console.log(this.pageForm.value)
    if(this.tipoUser=="0"){
      this.createComum();
    }
    else if(this.tipoUser=="1"){
      this.createBiblio();
    }
  }

  createComum(){
    this.apiUser.createUser(this.pageForm.value).subscribe(data => {
      console.log(data)
      this.apiUser.fazLoginSession(data as Token);
      });  
    
    this.rt.navigateByUrl('/finalizar-cadastro');
  }

  createBiblio(){
    this.apiBiblio.createBiblioteca(this.pageForm.value).subscribe(data => {
      console.log(data)
      this.apiBiblio.fazLoginSession(data as Token);
      });  
    
    this.rt.navigateByUrl('/finaliza-biblioteca');
  }

  onItemChange1(value: string){
    if(value = "on"){
      this.tipoUser = "0";
    }
    
 }

 onItemChange2(value: string){
  if(value = "on"){
    this.tipoUser = "1";
  }
  
}
onItemChange3(value: string){
  if(value = "on"){
    this.tipoUser = "2";
  }
  
}

}
