import {AbstractComponent} from '../abstract.component';
import {Observable} from 'rxjs';

export abstract class DestroyComponent extends AbstractComponent {
  getService(): Observable<any> {
    return this.service.destroy(this.id);
  }
}
