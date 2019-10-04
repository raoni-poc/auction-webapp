import {Component} from '@angular/core';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {StateHttpService} from '../state-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StateFormService} from '../state-form/state-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-state-insert',
  templateUrl: './state-insert.component.html',
  styleUrls: ['./state-insert.component.css']
})
export class StateInsertComponent extends InsertComponent {
  successMessage = 'Estado criado com sucesso.';

  constructor(service: StateHttpService,
              route: ActivatedRoute,
              formService: StateFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
