import {Component} from '@angular/core';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {CityHttpService} from '../city-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CityFormService} from '../city-form/city-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-city-show',
  templateUrl: './city-show.component.html',
  styleUrls: ['./city-show.component.css']
})
export class CityShowComponent extends ShowComponent {
  constructor(service: CityHttpService,
              route: ActivatedRoute,
              formService: CityFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
