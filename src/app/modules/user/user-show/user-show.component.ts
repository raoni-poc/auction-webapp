import {Component} from '@angular/core';
import {UserHttpService} from '../user-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormService} from '../user-form/user-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent extends ShowComponent {
  constructor(service: UserHttpService,
              route: ActivatedRoute,
              formService: UserFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
