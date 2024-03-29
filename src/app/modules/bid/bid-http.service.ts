import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../common/abstract/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class BidHttpService extends HttpService {
  constructor(protected http: HttpClient) {
    super(http);
    this.slug = 'bid';
  }
}
