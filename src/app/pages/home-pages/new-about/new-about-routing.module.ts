import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAboutPage } from './new-about.page';

const routes: Routes = [
  {
    path: '',
    component: NewAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAboutPageRoutingModule {}
