import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DocumentTypeHttpService} from '../document-type-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {DocumentTypeFormService} from '../document-type-form/document-type-form.service';

@Component({
  selector: 'app-document-type-edit',
  templateUrl: './document-type-edit.component.html',
  styleUrls: ['./document-type-edit.component.css']
})
export class DocumentTypeEditComponent extends EditComponent {
  successMessage = 'Tipo de documento editado com sucesso.';

  constructor(service: DocumentTypeHttpService,
              route: ActivatedRoute,
              formService: DocumentTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
