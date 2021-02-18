import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    this.userService.save(this.user).subscribe(
      () => {this.goToEmailPage()},
      error => {this.errorMsg = error.error.message; this.hidden=false});
  }

  ngOnInit() {
  }

  goToEmailPage() {
    this.router.navigate(['/redirect']);
  }

}
