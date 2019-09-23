import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from '../service/http.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.css']
})
export class DestroyComponent {

  private _id: number;
  private model;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private service: HttpService) {
  }

  @Input()
  set id(value) {
    this._id = value;
    if (this._id) {
      this.service
        .show(this._id)
        .subscribe(model => this.model = model);
    }
  }

  destroy() {
    this.service
      .destroy(this._id)
      .subscribe((category) => {
        this.onSuccess.emit(category);
      }, error => this.onError.emit(error));
  }
}
