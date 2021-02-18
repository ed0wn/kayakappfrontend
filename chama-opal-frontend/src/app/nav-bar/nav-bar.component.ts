import { Component, OnInit } from '@angular/core';
import { RedirectService } from '../service/redirect.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  imageUrl: string;

  constructor(private redirectService: RedirectService,
    private router: Router) { }

  ngOnInit() {
  }

  getSection() {
    if (this.redirectService.getSection().runnable === true) {
      this.imageUrl = 'assets/img/ok.png';
    } else if(this.redirectService.getSection().runnable === false){
      this.imageUrl = 'assets/img/x.png';
    }
    return this.redirectService.getSection();
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }
}
