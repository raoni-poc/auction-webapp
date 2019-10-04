import {Component} from '@angular/core';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {CityHttpService} from '../city-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CityFormService} from '../city-form/city-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-city-insert',
  templateUrl: './city-insert.component.html',
  styleUrls: ['./city-insert.component.css']
})
export class CityInsertComponent extends InsertComponent {
  successMessage = 'Cidade cadastrada com sucesso.';

  constructor(service: CityHttpService,
              route: ActivatedRoute,
              formService: CityFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
