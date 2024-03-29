import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CityHttpService} from '../city-http.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {CityFormService} from '../city-form/city-form.service';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: CityHttpService,
              route: ActivatedRoute,
              formService: CityFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
