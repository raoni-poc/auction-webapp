import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NotifyMessageService} from '../../notify-message/notify-message.service.ts.service';
import {HttpService} from '../service/http.service';

export abstract class InsertComponent {

  abstract successMessage: string;
  abstract slug: string;
  form: FormGroup;
  errors = {};

  protected constructor(protected service: HttpService,
                        protected formBuilder: FormBuilder,
                        protected router: Router,
                        protected notifyMessage: NotifyMessageService) {
    this.form = this.makeForm();
  }

  onSubmit() {
    this.service
      .insert(this.form.value)
      .subscribe((input) => {
        this.form.reset({
          name: null,
          trade_name: null,
        });
        this.notifyMessage.success(this.successMessage);
        this.router.navigate(['/' + this.slug + '/' + input.id]);
      }, responseError => {
        this.errors = responseError.error.errors;
      });
  }

  showErrors() {
    return Object.keys(this.errors).length !== 0;
  }

  abstract makeForm(): FormGroup;
}
