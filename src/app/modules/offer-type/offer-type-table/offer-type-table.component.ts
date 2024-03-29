import {Component} from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {CompanyFormService} from '../../company/company-form/company-form.service';
import {OfferTypeHttpService} from '../offer-type-http.service';

@Component({
  selector: 'app-offer-type-table',
  templateUrl: './offer-type-table.component.html',
  styleUrls: ['./offer-type-table.component.css']
})
export class OfferTypeTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: OfferTypeHttpService,
              route: ActivatedRoute,
              formService: CompanyFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
