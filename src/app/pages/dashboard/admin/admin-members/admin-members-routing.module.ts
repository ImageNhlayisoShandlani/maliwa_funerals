import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMembersPage } from './admin-members.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMembersPageRoutingModule {}
