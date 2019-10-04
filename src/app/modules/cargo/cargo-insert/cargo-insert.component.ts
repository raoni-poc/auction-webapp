import {Component} from '@angular/core';
import {CargoHttpService} from '../cargo-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CargoFormService} from '../cargo-form/cargo-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-cargo-insert',
  templateUrl: './cargo-insert.component.html',
  styleUrls: ['./cargo-insert.component.css']
})
export class CargoInsertComponent extends InsertComponent {
  successMessage = 'Carga criada com sucesso.';

  constructor(service: CargoHttpService,
              route: ActivatedRoute,
              formService: CargoFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
