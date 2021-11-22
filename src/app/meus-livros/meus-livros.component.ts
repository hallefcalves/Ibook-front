import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.css']
})
export class MeusLivrosComponent implements OnInit {

  constructor() { }
  url: string | ArrayBuffer | null = "";
  ngOnInit(): void {
  }

  onSelectFile(event:any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = (event.target as FileReader).result;
    }
  }

  /* <img [src]="url" height="200"> <br/>
                        <input type='file' (change)="onSelectFile($event)">*/

}
}
