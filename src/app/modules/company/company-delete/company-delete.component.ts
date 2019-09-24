import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyHttpService} from '../company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent extends DestroyComponent {
  slug = '/company';
  destroyMessage = 'Empresa removida com sucesso.';

  constructor(protected service: CompanyHttpService,
              protected route: ActivatedRoute,
              protected formBuilder: FormBuilder,
              protected location: Location,
              protected notifyMessage: NotifyMessageService,
              protected router: Router) {
    super(service, route, formBuilder, location, notifyMessage, router);

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
