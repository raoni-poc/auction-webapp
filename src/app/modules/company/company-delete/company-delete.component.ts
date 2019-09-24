import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyHttpService} from '../company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(private service: CompanyHttpService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location,
              private notifyMessage: NotifyMessageService,
              private router: Router) {
    this.form = this.formBuilder.group({
      name: [''],
      trade_name: ['']
    });
    this.form.disable();
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

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  remove(){
    this.service.destroy(this.id).subscribe(response => {
      this.notifyMessage.success('Empresa removida com sucesso.');
      this.router.navigate(['/company']);
    }, error => console.log(error));
  }
}
