import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import {SortColumnComponent} from './sort-column/sort-column.component';
import {BootstrapModule} from './bootstrap/bootstrap.module';
import {AbstractModule} from './abstract/abstract.module';
import {NavbarComponent} from './bootstrap/navbar/navbar.component.js';
// import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SortColumnComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    NgCommonModule,
    // RouterModule,
    BootstrapModule,
    // AbstractModule
  ]
})
export class CommonModule { }
