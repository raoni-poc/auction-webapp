import {Component} from '@angular/core';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {StateHttpService} from '../state-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StateFormService} from '../state-form/state-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-state-show',
  templateUrl: './state-show.component.html',
  styleUrls: ['./state-show.component.css']
})
export class StateShowComponent extends ShowComponent {
  constructor(service: StateHttpService,
              route: ActivatedRoute,
              formService: StateFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
