import {Component} from '@angular/core';
import {DocumentTypeHttpService} from '../document-type-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentTypeFormService} from '../document-type-form/document-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-document-type-insert',
  templateUrl: './document-type-insert.component.html',
  styleUrls: ['./document-type-insert.component.css']
})
export class DocumentTypeInsertComponent extends InsertComponent {
  successMessage = 'Tipo de documento criado com sucesso.';

  constructor(service: DocumentTypeHttpService,
              route: ActivatedRoute,
              formService: DocumentTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
