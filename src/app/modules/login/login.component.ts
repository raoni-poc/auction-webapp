import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../common/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: 'admin@user.com',
    password: 'secret'
  };

  showMessageError = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    // this.authService.login(this.credentials)
    //   .subscribe((data) => {
    //     this.router.navigate(['categories/list']);
    //   }, (error) => {
    //     console.log(error);
    //     this.showMessageError = true;
    //   });
    // return false;
  }

}
