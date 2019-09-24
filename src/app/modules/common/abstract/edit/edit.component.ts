import {OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyMessageService} from '../../notify-message/notify-message.service.ts.service';
import {HttpService} from '../service/http.service';

export abstract class EditComponent implements OnInit {

  form: FormGroup;
  id: number;
  errors = {};
  abstract createMessage: string;
  abstract slug: string;

  protected constructor(protected service: HttpService,
                        protected route: ActivatedRoute,
                        protected formBuilder: FormBuilder,
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
    this.service
      .edit(this.id, this.form.value)
      .subscribe((input) => {
        this.notifyMessage.success(this.createMessage);
        this.router.navigate(['/' + this.slug + '/' + input.id]);
      }, responseError => {
        this.errors = responseError.error.errors;
      });
  }

  showErrors() {
    return Object.keys(this.errors).length !== 0;
  }

  abstract hydrateForm(response);

  abstract makeForm(): FormGroup;
}
