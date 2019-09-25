import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyHttpService} from '../company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {HttpService} from '../../common/abstract/service/http.service';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent extends DestroyComponent {
  slug = 'company';
  successMessage = 'Empresa removida com sucesso.';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
    this.form.disable();
  }

  hydrateForm(response) {
    this.form.get('name').setValue(response.name);
    this.form.get('trade_name').setValue(response.trade_name);
  }

  makeForm(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      trade_name: ['']
    });
  }
}
