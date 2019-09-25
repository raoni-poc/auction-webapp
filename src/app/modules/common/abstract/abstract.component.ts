import {OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from './service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyMessageService} from '../notify-message/notify-message.service.ts.service';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';

export abstract class AbstractComponent implements OnInit {
  abstract slug: string;
  abstract successMessage: string;
  form: FormGroup;
  id: number;
  errors = {};

  protected constructor(protected service: HttpService,
                        protected route: ActivatedRoute,
                        protected formBuilder: FormBuilder,
                        protected location: Location,
                        protected router: Router,
                        protected notifyMessage: NotifyMessageService) {
    this.form = this.makeForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.refresh();
  }

  refresh() {
    this.service.show(this.id).subscribe(
      response => {
        this.hydrateForm(response);
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.getService()
      .subscribe((input) => {
        this.resetForm();
        this.notifyMessage.success(this.successMessage);
        try {
          this.router.navigate(['/' + this.slug + '/' + input.id]);
        } catch (e) {
          this.router.navigate(['/' + this.slug]);
        }
      }, responseError => {
        this.errors = responseError.error.errors;
      });
  }

  goBack() {
    this.location.back();
  }

  goToEdit() {
    if (this.id) {
      return this.router.navigate(['/' + this.slug + '/edit/' + this.id]);
    }
    console.log('Não há id');
  }

  goToDelete() {
    if (this.id) {
      this.router.navigate(['/' + this.slug + '/delete/' + this.id]);
    }
    console.log('Não há id');
  }

  showErrors() {
    return Object.keys(this.errors).length !== 0;
  }

  abstract hydrateForm(response);

  abstract makeForm();

  abstract resetForm();

  abstract getService(): Observable<any>;
}
