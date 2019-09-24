import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyHttpService} from '../company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import companyFieldOptions from '../company-fields-options';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  errors = {};

  constructor(private service: CompanyHttpService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private notifyMessage: NotifyMessageService) {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(companyFieldOptions.name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.name.validationMessage.maxlength)
      ]],
      trade_name: ['', [
        Validators.required,
        Validators.minLength(companyFieldOptions.trade_name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.trade_name.validationMessage.maxlength)
      ]]
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.refresh();
  }

  refresh() {
    console.log(this.id);
    this.service.show(this.id).subscribe(
      response => {
        this.form.get('name').setValue(response.name);
        this.form.get('trade_name').setValue(response.trade_name);
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.service
      .edit(this.id, this.form.value)
      .subscribe((input) => {
        this.notifyMessage.success('Empresa editada com sucesso.');
        this.router.navigate(['/company/' + input.id]);
      }, responseError => {
        this.errors = responseError.error.errors;
      });
  }

  showErrors() {
    return Object.keys(this.errors).length !== 0;
  }
}
