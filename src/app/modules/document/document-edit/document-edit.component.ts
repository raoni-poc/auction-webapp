import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DocumentHttpService} from '../document-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {DocumentFormService} from '../document-form/document-form.service';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent extends EditComponent {
  successMessage = 'Documento editado com sucesso.';

  constructor(service: DocumentHttpService,
              route: ActivatedRoute,
              formService: DocumentFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
