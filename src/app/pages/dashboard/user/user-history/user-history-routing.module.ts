import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHistoryPage } from './user-history.page';

const routes: Routes = [
  {
    path: '',
    component: UserHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHistoryPageRoutingModule {}
