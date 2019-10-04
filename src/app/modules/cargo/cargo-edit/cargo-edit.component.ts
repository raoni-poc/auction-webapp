import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {CargoHttpService} from '../cargo-http.service';
import {CargoFormService} from '../cargo-form/cargo-form.service';

@Component({
  selector: 'app-cargo-edit',
  templateUrl: './cargo-edit.component.html',
  styleUrls: ['./cargo-edit.component.css']
})
export class CargoEditComponent extends EditComponent {
  successMessage = 'Carga editada com sucesso.';

  constructor(service: CargoHttpService,
              route: ActivatedRoute,
              formService: CargoFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
