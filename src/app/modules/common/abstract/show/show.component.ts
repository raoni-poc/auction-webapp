import {OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../service/http.service';

export abstract class ShowComponent implements OnInit {

  abstract slug: string;
  form: FormGroup;
  id: number;

  protected constructor(protected service: HttpService,
                        protected route: ActivatedRoute,
                        protected formBuilder: FormBuilder,
                        protected router: Router) {
    this.form = this.makeForm();
    this.form.disable();
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

  goToEdit() {
    this.router.navigate(['/' + this.slug + '/edit/' + this.id]);
  }

  goToDelete() {
    this.router.navigate(['/' + this.slug + '/delete/' + this.id]);
  }

  abstract makeForm(): FormGroup;

  abstract hydrateForm(response);
}
