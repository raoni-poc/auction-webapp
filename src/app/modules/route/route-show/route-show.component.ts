import {Component} from '@angular/core';
import {RouteHttpService} from '../route-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteFormService} from '../route-form/route-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-route-show',
  templateUrl: './route-show.component.html',
  styleUrls: ['./route-show.component.css']
})
export class RouteShowComponent extends ShowComponent {
  constructor(service: RouteHttpService,
              route: ActivatedRoute,
              formService: RouteFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
