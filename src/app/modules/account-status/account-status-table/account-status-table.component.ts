import {Component} from '@angular/core';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {AccountStatusHttpService} from '../account-status-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-account-status-table',
  templateUrl: './account-status-table.component.html',
  styleUrls: ['./account-status-table.component.css']
})
export class AccountStatusTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: AccountStatusHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
  }
}
