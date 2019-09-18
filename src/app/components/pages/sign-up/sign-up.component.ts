import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnChanges {
  constructor(private changeRef: ChangeDetectorRef) {
  }

  ngOnChanges(): void {
    this.changeRef.detectChanges();
  }

  get fieldOptions(): any {
    return this.fieldOptions;
  }
}
