import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLandingPage } from './admin-landing.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLandingPageRoutingModule {}
