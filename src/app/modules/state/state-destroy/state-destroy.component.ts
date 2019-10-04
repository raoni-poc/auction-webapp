import {Component} from '@angular/core';
import {StateHttpService} from '../state-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StateFormService} from '../state-form/state-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-state-destroy',
  templateUrl: './state-destroy.component.html',
  styleUrls: ['./state-destroy.component.css']
})
export class StateDestroyComponent extends DestroyComponent {
  successMessage = 'Estado apagado com sucesso.';

  constructor(service: StateHttpService,
              route: ActivatedRoute,
              formService: StateFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
