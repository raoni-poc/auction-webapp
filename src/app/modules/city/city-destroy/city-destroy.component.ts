import {Component} from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {CityHttpService} from '../city-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CityFormService} from '../city-form/city-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-city-destroy',
  templateUrl: './city-destroy.component.html',
  styleUrls: ['./city-destroy.component.css']
})
export class CityDestroyComponent extends DestroyComponent {
  successMessage = 'Cidade apagada com sucesso.';

  constructor(service: CityHttpService,
              route: ActivatedRoute,
              formService: CityFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
