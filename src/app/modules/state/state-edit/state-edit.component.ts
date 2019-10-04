import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {StateHttpService} from '../state-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {StateFormService} from '../state-form/state-form.service';

@Component({
  selector: 'app-state-edit',
  templateUrl: './state-edit.component.html',
  styleUrls: ['./state-edit.component.css']
})
export class StateEditComponent extends EditComponent {
  successMessage = 'Estado editado com sucesso.';

  constructor(service: StateHttpService,
              route: ActivatedRoute,
              formService: StateFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
