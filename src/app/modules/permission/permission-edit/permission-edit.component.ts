import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {PermissionHttpService} from '../permission-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {PermissionFormService} from '../permission-form/permission-form.service';

@Component({
  selector: 'app-permission-edit',
  templateUrl: './permission-edit.component.html',
  styleUrls: ['./permission-edit.component.css']
})
export class PermissionEditComponent extends EditComponent {
  successMessage = 'Permissão editada com sucesso.';

  constructor(service: PermissionHttpService,
              route: ActivatedRoute,
              formService: PermissionFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
