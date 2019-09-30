import { Component, OnInit } from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {CargoHttpService} from '../cargo-http.service';

@Component({
  selector: 'app-cargo-table',
  templateUrl: './cargo-table.component.html',
  styleUrls: ['./cargo-table.component.css']
})
export class CargoTableComponent extends CollectionComponent{
  successMessage = 'Carga criada com sucesso.';
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: CargoHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
  }
}
