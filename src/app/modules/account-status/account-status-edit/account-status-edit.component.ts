import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {Location} from '@angular/common';
import {AccountStatusHttpService} from '../account-status-http.service';
import {AccountStatusFormService} from '../account-status-form/account-status-form.service';

@Component({
  selector: 'app-account-status-edit',
  templateUrl: './account-status-edit.component.html',
  styleUrls: ['./account-status-edit.component.css']
})
export class AccountStatusEditComponent extends EditComponent {
  successMessage = 'Status de conta editado com sucesso.';

  constructor(service: AccountStatusHttpService,
              route: ActivatedRoute,
              formService: AccountStatusFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
