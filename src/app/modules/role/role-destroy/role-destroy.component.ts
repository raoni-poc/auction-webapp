import {Component} from '@angular/core';
import {RoleHttpService} from '../role-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleFormService} from '../role-form/role-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-role-destroy',
  templateUrl: './role-destroy.component.html',
  styleUrls: ['./role-destroy.component.css']
})
export class RoleDestroyComponent extends DestroyComponent {
  successMessage = 'Regra apagada com sucesso.';

  constructor(service: RoleHttpService,
              route: ActivatedRoute,
              formService: RoleFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
