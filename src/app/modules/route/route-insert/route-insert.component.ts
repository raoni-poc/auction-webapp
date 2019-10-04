import {Component} from '@angular/core';
import {RouteHttpService} from '../route-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteFormService} from '../route-form/route-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-route-insert',
  templateUrl: './route-insert.component.html',
  styleUrls: ['./route-insert.component.css']
})
export class RouteInsertComponent extends InsertComponent {
  successMessage = 'Rota criada com sucesso.';

  constructor(service: RouteHttpService,
              route: ActivatedRoute,
              formService: RouteFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
