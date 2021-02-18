import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;

  constructor(private router: Router) {
    this.title = 'Welcome to Flow Forecast!';
  }

  ngOnInit() {
    if(localStorage.getItem('jwt') !== null){
      this.router.navigate(['map']);
    }
  }

}
