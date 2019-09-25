import {Component, OnInit} from '@angular/core';
import {CompanyHttpService} from '../company-http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {HttpService} from '../../common/abstract/service/http.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.css']
})
export class CompanyShowComponent extends ShowComponent {
  slug = 'company';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
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
