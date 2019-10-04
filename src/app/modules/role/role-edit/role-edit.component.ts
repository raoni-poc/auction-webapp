import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {RoleHttpService} from '../role-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {RoleFormService} from '../role-form/role-form.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent extends EditComponent {
  successMessage = 'Regra editada com sucesso.';

  constructor(service: RoleHttpService,
              route: ActivatedRoute,
              formService: RoleFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
