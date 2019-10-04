import {Component} from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {AccountStatusHttpService} from '../account-status-http.service';
import {AccountStatusFormService} from '../account-status-form/account-status-form.service';

@Component({
  selector: 'app-account-status-destroy',
  templateUrl: './account-status-destroy.component.html',
  styleUrls: ['./account-status-destroy.component.css']
})
export class AccountStatusDestroyComponent extends DestroyComponent {
  successMessage = 'Status de conta removido com sucesso.';

  constructor(service: AccountStatusHttpService,
              route: ActivatedRoute,
              formService: AccountStatusFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
