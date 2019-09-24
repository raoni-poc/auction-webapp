import {Component, OnInit} from '@angular/core';
import {CompanyHttpService} from '../company-http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.css']
})
export class CompanyShowComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(private service: CompanyHttpService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
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

  goToEdit() {
    this.router.navigate(['/company/edit/' + this.id]);
  }

  goToDelete() {
    this.router.navigate(['/company/delete/' + this.id]);
  }
}
