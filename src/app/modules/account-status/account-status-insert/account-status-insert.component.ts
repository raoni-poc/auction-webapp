import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {Location} from '@angular/common';
import {AccountStatusHttpService} from '../account-status-http.service';
import {AccountStatusFormService} from '../account-status-form/account-status-form.service';

@Component({
  selector: 'app-account-status-insert',
  templateUrl: './account-status-insert.component.html',
  styleUrls: ['./account-status-insert.component.css']
})
export class AccountStatusInsertComponent extends InsertComponent {
  successMessage = 'Status de conta criado com sucesso.';

  constructor(service: AccountStatusHttpService,
              route: ActivatedRoute,
              formService: AccountStatusFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
