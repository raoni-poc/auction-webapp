import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {AccountStatusHttpService} from '../account-status-http.service';
import {AccountStatusFormService} from '../account-status-form/account-status-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-account-status-show',
  templateUrl: './account-status-show.component.html',
  styleUrls: ['./account-status-show.component.css']
})
export class AccountStatusShowComponent extends ShowComponent {
  constructor(service: AccountStatusHttpService,
              route: ActivatedRoute,
              formService: AccountStatusFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
