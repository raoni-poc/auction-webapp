import {Component} from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {DocumentHttpService} from '../document-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentFormService} from '../document-form/document-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-document-destroy',
  templateUrl: './document-destroy.component.html',
  styleUrls: ['./document-destroy.component.css']
})
export class DocumentDestroyComponent extends DestroyComponent {
  successMessage = 'Documento apagado com sucesso.';

  constructor(service: DocumentHttpService,
              route: ActivatedRoute,
              formService: DocumentFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
