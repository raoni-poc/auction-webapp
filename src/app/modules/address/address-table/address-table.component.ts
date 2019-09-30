import { Component, OnInit } from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {AddressHttpService} from '../address-http.service';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.css']
})
export class AddressTableComponent extends CollectionComponent{
  successMessage = 'Endereço criado com sucesso.';
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: AddressHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
  }
}
