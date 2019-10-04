import {Component} from '@angular/core';
import {AddressHttpService} from '../address-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressFormService} from '../address-form/address-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-address-insert',
  templateUrl: './address-insert.component.html',
  styleUrls: ['./address-insert.component.css']
})
export class AddressInsertComponent extends InsertComponent {
  successMessage = 'Endereço criado com sucesso.';

  constructor(service: AddressHttpService,
              route: ActivatedRoute,
              formService: AddressFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
