import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  // logout() {
  //   this.authService
  //     .logout()
  //     .subscribe(() => this.router.navigate(['/login']));
  // }

}
