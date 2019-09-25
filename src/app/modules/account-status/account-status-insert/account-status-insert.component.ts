// import {Component} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {Router} from '@angular/router';
// import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
// import {InsertComponent} from '../../common/abstract/insert/insert.component';
// import accountStatusFieldOptions from '../account-status-fields-options';
// import {AccountStatusHttpService} from '../account-status-http.service';
//
// @Component({
//   selector: 'app-account-status-insert',
//   templateUrl: './account-status-insert.component.html',
//   styleUrls: ['./account-status-insert.component.css']
// })
// export class AccountStatusInsertComponent extends InsertComponent {
//   successMessage = 'Status de conta criado com sucesso.';
//   slug = 'account-status';
//
//   constructor(protected service: AccountStatusHttpService,
//               protected formBuilder: FormBuilder,
//               protected router: Router,
//               protected notifyMessage: NotifyMessageService) {
//     super(service, formBuilder, router, notifyMessage);
//   }
//
//   makeForm(): FormGroup {
//     return this.formBuilder.group({
//       name: ['Status ' + (new Date().getTime()), [
//         Validators.required,
//         Validators.minLength(accountStatusFieldOptions.name.validationMessage.minlength),
//         Validators.maxLength(accountStatusFieldOptions.name.validationMessage.maxlength)
//       ]]
//     });
//   }
// }
