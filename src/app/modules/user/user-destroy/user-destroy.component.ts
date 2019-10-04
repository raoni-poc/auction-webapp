import {Component} from '@angular/core';
import {UserHttpService} from '../user-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormService} from '../user-form/user-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-user-destroy',
  templateUrl: './user-destroy.component.html',
  styleUrls: ['./user-destroy.component.css']
})
export class UserDestroyComponent extends DestroyComponent {
  successMessage = 'Usuário apagado com sucesso.';

  constructor(service: UserHttpService,
              route: ActivatedRoute,
              formService: UserFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
