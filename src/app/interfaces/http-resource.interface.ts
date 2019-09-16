import {SearchParams} from './search-params.interface';
import {Observable} from 'rxjs';

export interface HttpResource<T> {
  list(searchParams: SearchParams): Observable<{ data: Array<T>, meta: any }>;

  get(id: number): Observable<T>;

  create(data: T): Observable<T>;

  update(id: number, data: T): Observable<T>;

  destroy(id: number): Observable<any>;
}
