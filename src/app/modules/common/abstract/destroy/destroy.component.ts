import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../notify-message/notify-message.service.ts.service';

export abstract class DestroyComponent implements OnInit {
  form: FormGroup;
  id: number;
  abstract slug: string;
  abstract destroyMessage: string;

  protected constructor(protected service: HttpService,
                        protected route: ActivatedRoute,
                        protected formBuilder: FormBuilder,
                        protected location: Location,
                        protected notifyMessage: NotifyMessageService,
                        protected router: Router) {
    this.form = this.makeForm();
  }

  ngOnInit(): void {
    this.form.disable();
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.refresh();
  }

  refresh() {
    this.service.show(this.id).subscribe(
      response => this.hydrateForm(response), error => console.log(error)
    );
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  remove() {
    this.service.destroy(this.id).subscribe(response => {
      this.notifyMessage.success(this.destroyMessage);
      this.router.navigate(['/' + this.slug]);
    }, error => console.log(error));
  }

  abstract hydrateForm(response);

  abstract makeForm(): FormGroup;
}
