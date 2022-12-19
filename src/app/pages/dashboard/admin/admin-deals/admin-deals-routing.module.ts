import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDealsPage } from './admin-deals.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDealsPageRoutingModule {}
