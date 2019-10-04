import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {UserHttpService} from '../user-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {UserFormService} from '../user-form/user-form.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends EditComponent {
  successMessage = 'Usuário editado com sucesso.';

  constructor(service: UserHttpService,
              route: ActivatedRoute,
              formService: UserFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
