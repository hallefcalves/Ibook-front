import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/bootstrap.css'],
})
export class AppComponent {
  title = 'IBookSite';

  constructor(private router: Router) { }

  ngOnInit(): void { }

}