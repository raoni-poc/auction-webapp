import {Component} from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {DocumentTypeHttpService} from '../document-type-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentTypeFormService} from '../document-type-form/document-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-document-type-destroy',
  templateUrl: './document-type-destroy.component.html',
  styleUrls: ['./document-type-destroy.component.css']
})
export class DocumentTypeDestroyComponent extends DestroyComponent {
  successMessage = 'Tipo de documento apagado com sucesso.';

  constructor(service: DocumentTypeHttpService,
              route: ActivatedRoute,
              formService: DocumentTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
