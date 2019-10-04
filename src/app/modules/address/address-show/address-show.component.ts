import {Component} from '@angular/core';
import {AddressHttpService} from '../address-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressFormService} from '../address-form/address-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-address-show',
  templateUrl: './address-show.component.html',
  styleUrls: ['./address-show.component.css']
})
export class AddressShowComponent extends ShowComponent {
  constructor(service: AddressHttpService,
              route: ActivatedRoute,
              formService: AddressFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
