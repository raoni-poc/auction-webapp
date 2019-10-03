import {Component} from '@angular/core';
import {CompanyHttpService} from '../company-http.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CompanyFormService} from '../company-form/company-form.service';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formService: CompanyFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
