import { Component } from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';

@Component({
  selector: 'app-offer-type-table',
  templateUrl: './offer-type-table.component.html',
  styleUrls: ['./offer-type-table.component.css']
})
export class OfferTypeTableComponent extends CollectionComponent{
  successMessage = 'Tipo de oferta cadastrado com sucesso.';
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
  }
}
