import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {RoleHttpService} from '../role-http.service';
import {RoleFormService} from '../role-form/role-form.service';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.css']
})
export class RoleTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: RoleHttpService,
              route: ActivatedRoute,
              formService: RoleFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
