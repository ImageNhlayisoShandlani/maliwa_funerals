import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPolicyHolderPage } from './add-policy-holder.page';

const routes: Routes = [
  {
    path: '',
    component: AddPolicyHolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPolicyHolderPageRoutingModule {}
