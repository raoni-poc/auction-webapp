import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserHttpService} from '../service/user-http.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: UserHttpService) {
    this.form = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.min(5)]],
    });
  }

  submit() {
    this.service.create(this.form.value).subscribe((response) => {

    }, responseError => {

    });
  }

}
