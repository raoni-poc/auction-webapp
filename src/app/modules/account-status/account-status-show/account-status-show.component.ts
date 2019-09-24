import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {AccountStatusHttpService} from '../account-status-http.service';

@Component({
  selector: 'app-account-status-show',
  templateUrl: './account-status-show.component.html',
  styleUrls: ['./account-status-show.component.css']
})
export class AccountStatusShowComponent extends ShowComponent{

  slug = 'account-status';
  form: FormGroup;
  id: number;

  constructor(protected service: AccountStatusHttpService,
              protected route: ActivatedRoute,
              protected formBuilder: FormBuilder,
              protected router: Router) {
    super(service, route, formBuilder, router);
  }

  makeForm(): FormGroup {
    return this.form = this.formBuilder.group({
      name: [''],
      trade_name: ['']
    });
  }

  hydrateForm(response) {
    this.form.get('name').setValue(response.name);
  }
}
