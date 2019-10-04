import {Component} from '@angular/core';
import {RouteHttpService} from '../route-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteFormService} from '../route-form/route-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-route-destroy',
  templateUrl: './route-destroy.component.html',
  styleUrls: ['./route-destroy.component.css']
})
export class RouteDestroyComponent extends DestroyComponent {
  successMessage = 'Rota apagada com sucesso.';

  constructor(service: RouteHttpService,
              route: ActivatedRoute,
              formService: RouteFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
