import {Component, OnInit} from '@angular/core';
import {CompanyHttpService} from '../company-http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.css']
})
export class CompanyShowComponent extends ShowComponent {

  slug = 'company';
  form: FormGroup;
  id: number;

  constructor(protected service: CompanyHttpService,
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
    this.form.get('trade_name').setValue(response.trade_name);
  }
}
