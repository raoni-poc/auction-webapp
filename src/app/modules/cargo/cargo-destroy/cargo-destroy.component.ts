import {Component} from '@angular/core';
import {CargoHttpService} from '../cargo-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CargoFormService} from '../cargo-form/cargo-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-cargo-destroy',
  templateUrl: './cargo-destroy.component.html',
  styleUrls: ['./cargo-destroy.component.css']
})
export class CargoDestroyComponent extends DestroyComponent {
  successMessage = 'Carga apagada com sucesso.';

  constructor(service: CargoHttpService,
              route: ActivatedRoute,
              formService: CargoFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
