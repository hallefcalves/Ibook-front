import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css', './assets/bootstrap/css/bootstrap.min.css', './assets/css/untitled.css', './assets/fonts/font-awesome.min.css', './assets/fonts/simple-line-icons.min.css']
})
export class PaginaInicialComponent implements OnInit {
  // email:string = '';
  constructor(private fb: FormBuilder,private route: Router) {
    this.pageForm = this.fb.group({email:['', [Validators.required,Validators.email]]})
   }
  pageForm: FormGroup;
  ngOnInit(): void {
    this.booleanValueEvent.emit(this.userFlow)
  }
  userFlow: string = "teste";
  
  handleNavigation(){
    this.route.navigateByUrl('/cadastro?user='+  this.pageForm.value.email);
  }
  @Output() booleanValueEvent = new EventEmitter<string>();

  onSubmit(event: any) {
    this.userFlow = event.target.email.value;
 }

}
