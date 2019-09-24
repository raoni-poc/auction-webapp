import { Component, OnInit } from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {AccountStatusHttpService} from '../account-status-http.service';

@Component({
  selector: 'app-account-status-destroy',
  templateUrl: './account-status-destroy.component.html',
  styleUrls: ['./account-status-destroy.component.css']
})
export class AccountStatusDestroyComponent  extends DestroyComponent {
  slug = 'account-status';
  destroyMessage = 'Status de conta removida com sucesso.';

  constructor(protected service: AccountStatusHttpService,
              protected route: ActivatedRoute,
              protected formBuilder: FormBuilder,
              protected location: Location,
              protected notifyMessage: NotifyMessageService,
              protected router: Router) {
    super(service, route, formBuilder, location, notifyMessage, router);

  }

  hydrateForm(response) {
    this.form.get('name').setValue(response.name);
  }

  makeForm(): FormGroup {
    return this.formBuilder.group({
      name: [''],
    });
  }
}
