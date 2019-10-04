import {Component} from '@angular/core';
import {PermissionHttpService} from '../permission-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PermissionFormService} from '../permission-form/permission-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-permission-show',
  templateUrl: './permission-show.component.html',
  styleUrls: ['./permission-show.component.css']
})
export class PermissionShowComponent extends ShowComponent {
  constructor(service: PermissionHttpService,
              route: ActivatedRoute,
              formService: PermissionFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
