import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { format } from 'url';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  errorMsg: string;
  hidden = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {
    this.user = new User();
  }
 
  onSubmit() {
    this.userService.login(this.user).subscribe(
      result => {localStorage.setItem('jwt', result.jwt); this.router.navigate(['map'])},
      error => {this.errorMsg = error.error.message; this.hidden=false});
    }

  ngOnInit() {
    /*if (localStorage.getItem('jwt') !== null){
      this.router.navigate(['map'])
    }*/
  }

}
