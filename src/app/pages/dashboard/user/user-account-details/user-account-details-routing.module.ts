import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccountDetailsPage } from './user-account-details.page';

const routes: Routes = [
  {
    path: '',
    component: UserAccountDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccountDetailsPageRoutingModule {}
