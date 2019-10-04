import {Component} from '@angular/core';
import {PermissionHttpService} from '../permission-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PermissionFormService} from '../permission-form/permission-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-permission-insert',
  templateUrl: './permission-insert.component.html',
  styleUrls: ['./permission-insert.component.css']
})
export class PermissionInsertComponent extends InsertComponent {
  successMessage = 'Permissão criada com sucesso.';

  constructor(service: PermissionHttpService,
              route: ActivatedRoute,
              formService: PermissionFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
