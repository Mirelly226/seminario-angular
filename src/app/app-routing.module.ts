import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: ItemComponent.URL, component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
