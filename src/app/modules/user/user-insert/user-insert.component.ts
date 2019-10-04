import {Component} from '@angular/core';
import {UserHttpService} from '../user-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormService} from '../user-form/user-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent extends InsertComponent {
  successMessage = 'Usuário criado com sucesso.';

  constructor(service: UserHttpService,
              route: ActivatedRoute,
              formService: UserFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
