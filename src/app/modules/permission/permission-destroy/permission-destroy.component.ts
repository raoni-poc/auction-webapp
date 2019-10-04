import {Component} from '@angular/core';
import {PermissionHttpService} from '../permission-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PermissionFormService} from '../permission-form/permission-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-permission-destroy',
  templateUrl: './permission-destroy.component.html',
  styleUrls: ['./permission-destroy.component.css']
})
export class PermissionDestroyComponent extends DestroyComponent {
  successMessage = 'Permissão apagada com sucesso.';

  constructor(service: PermissionHttpService,
              route: ActivatedRoute,
              formService: PermissionFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
