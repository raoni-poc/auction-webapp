import {Component} from '@angular/core';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {AccountStatusHttpService} from '../account-status-http.service';
import {AccountStatusFormService} from '../account-status-form/account-status-form.service';

@Component({
  selector: 'app-account-status-table',
  templateUrl: './account-status-table.component.html',
  styleUrls: ['./account-status-table.component.css']
})
export class AccountStatusTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: AccountStatusHttpService,
              route: ActivatedRoute,
              formService: AccountStatusFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
