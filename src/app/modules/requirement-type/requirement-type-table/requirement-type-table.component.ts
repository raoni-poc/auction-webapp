import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {RequirementTypeHttpService} from '../requirement-type-http.service';
import {RequirementTypeFormService} from '../requirement-type-form/requirement-type-form.service';

@Component({
  selector: 'app-requirement-type-table',
  templateUrl: './requirement-type-table.component.html',
  styleUrls: ['./requirement-type-table.component.css']
})
export class RequirementTypeTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: RequirementTypeHttpService,
              route: ActivatedRoute,
              formService: RequirementTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
