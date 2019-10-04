import {Component} from '@angular/core';
import {RoleHttpService} from '../role-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleFormService} from '../role-form/role-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-role-insert',
  templateUrl: './role-insert.component.html',
  styleUrls: ['./role-insert.component.css']
})
export class RoleInsertComponent extends InsertComponent {
  successMessage = 'Regra criada com sucesso.';

  constructor(service: RoleHttpService,
              route: ActivatedRoute,
              formService: RoleFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
