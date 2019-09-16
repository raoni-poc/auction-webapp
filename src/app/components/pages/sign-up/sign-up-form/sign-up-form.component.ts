import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  step = 1;

  constructor() {
  }

  ngOnInit() {
  }

  goToCompanyForm() {
    this.step = 1;
  }

  goToUserForm() {
    this.step = 2;
  }

  canShowCompanyForm() {
    return this.step === 1;
  }

  canShowUserForm() {
    return this.step === 2;
  }
}
