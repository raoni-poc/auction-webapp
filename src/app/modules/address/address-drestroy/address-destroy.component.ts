import {Component} from '@angular/core';
import {AddressHttpService} from '../address-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressFormService} from '../address-form/address-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-address-drestroy',
  templateUrl: './address-destroy.component.html',
  styleUrls: ['./address-destroy.component.css']
})
export class AddressDestroyComponent extends DestroyComponent {
  successMessage = 'Endereço apagado com sucesso.';

  constructor(service: AddressHttpService,
              route: ActivatedRoute,
              formService: AddressFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
