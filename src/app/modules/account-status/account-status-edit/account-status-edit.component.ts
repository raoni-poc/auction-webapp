import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {AccountStatusHttpService} from '../account-status-http.service';
import accountStatusFieldOptions from '../account-status-fields-options';

@Component({
  selector: 'app-account-status-edit',
  templateUrl: './account-status-edit.component.html',
  styleUrls: ['./account-status-edit.component.css']
})
export class AccountStatusEditComponent extends EditComponent {
  form: FormGroup;
  id: number;
  errors = {};
  slug = 'account-status';
  createMessage = 'Status de conta editada com sucesso.';

  constructor(protected service: AccountStatusHttpService,
              protected route: ActivatedRoute,
              protected formBuilder: FormBuilder,
              protected router: Router,
              protected notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, router, notifyMessage);
  }

  hydrateForm(response) {
    this.form.get('name').setValue(response.name);
  }

  makeForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(accountStatusFieldOptions.name.validationMessage.minlength),
        Validators.maxLength(accountStatusFieldOptions.name.validationMessage.maxlength)
      ]]
    });
  }
}
