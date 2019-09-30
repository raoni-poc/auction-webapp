import {Component} from '@angular/core';
import {CompanyHttpService} from '../company-http.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent extends CollectionComponent {
  successMessage = 'Empresa criada com sucesso.';
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
