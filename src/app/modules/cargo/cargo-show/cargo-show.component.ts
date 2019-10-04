import {Component} from '@angular/core';
import {CargoHttpService} from '../cargo-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CargoFormService} from '../cargo-form/cargo-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-cargo-show',
  templateUrl: './cargo-show.component.html',
  styleUrls: ['./cargo-show.component.css']
})
export class CargoShowComponent extends ShowComponent {

  constructor(service: CargoHttpService,
              route: ActivatedRoute,
              formService: CargoFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
