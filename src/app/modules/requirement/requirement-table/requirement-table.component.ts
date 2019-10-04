import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {RequirementHttpService} from '../requirement-http.service';
import {RequirementFormService} from '../requirement-form/requirement-form.service';

@Component({
  selector: 'app-requirement-table',
  templateUrl: './requirement-table.component.html',
  styleUrls: ['./requirement-table.component.css']
})
export class RequirementTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: RequirementHttpService,
              route: ActivatedRoute,
              formService: RequirementFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
