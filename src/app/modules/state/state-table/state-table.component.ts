import {Component} from '@angular/core';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.css']
})
export class StateTableComponent extends CollectionComponent {
  successMessage = 'Estado cradastrado com sucesso.';
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
