import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {BidHttpService} from '../bid-http.service';
import {BidFormService} from '../bid-form/bid-form.service';

@Component({
  selector: 'app-bid-edit',
  templateUrl: './bid-edit.component.html',
  styleUrls: ['./bid-edit.component.css']
})
export class BidEditComponent extends EditComponent {
  successMessage = 'Lance Editado com sucesso.';

  constructor(service: BidHttpService,
              route: ActivatedRoute,
              formService: BidFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
