import {AbstractComponent} from '../abstract.component';
import {HttpService} from '../service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {NotifyMessageService} from '../../notify-message/notify-message.service.ts.service';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';

export abstract class ShowComponent extends AbstractComponent {
  successMessage = '';

  protected constructor(protected service: HttpService,
                        protected route: ActivatedRoute,
                        protected formBuilder: FormBuilder,
                        protected location: Location,
                        protected router: Router,
                        protected notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
    this.form.disable();
  }

  onSubmit() {
  }

  resetForm() {
  }

  getService(): Observable<any> {
    return this.service.show(this.id);
  }
}
