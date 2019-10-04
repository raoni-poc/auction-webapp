import {AbstractComponent} from '../abstract.component';
import {Observable} from 'rxjs';

export abstract class InsertComponent extends AbstractComponent {
  getService(): Observable<any> {
    return this.service.insert(this.form.value);
  }

  refresh() {
  }
}
