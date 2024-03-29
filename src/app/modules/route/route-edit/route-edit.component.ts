import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {RouteHttpService} from '../route-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {RouteFormService} from '../route-form/route-form.service';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent extends EditComponent {
  successMessage = 'Rota editada com sucesso.';

  constructor(service: RouteHttpService,
              route: ActivatedRoute,
              formService: RouteFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
