import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateWebPage } from './update-web.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWebPageRoutingModule {}
