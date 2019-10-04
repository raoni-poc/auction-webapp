import {Component} from '@angular/core';
import {RoleHttpService} from '../role-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleFormService} from '../role-form/role-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-role-show',
  templateUrl: './role-show.component.html',
  styleUrls: ['./role-show.component.css']
})
export class RoleShowComponent extends ShowComponent {
  constructor(service: RoleHttpService,
              route: ActivatedRoute,
              formService: RoleFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
