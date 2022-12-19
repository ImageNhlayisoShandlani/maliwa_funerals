import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetPolicyPage } from './get-policy.page';

const routes: Routes = [
  {
    path: '',
    component: GetPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetPolicyPageRoutingModule {}
