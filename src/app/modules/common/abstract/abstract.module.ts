import {NgModule} from '@angular/core';
import {CollectionComponent} from './collection/collection.component';
import {DestroyComponent} from './destroy/destroy.component';
import {EditComponent} from './edit/edit.component';
import {InsertComponent} from './insert/insert.component';
import {ShowComponent} from './show/show.component';

@NgModule({
  declarations: [
    CollectionComponent,
    DestroyComponent,
    EditComponent,
    InsertComponent,
    ShowComponent
  ],
  imports: [],
})
export class AbstractModule {
}
