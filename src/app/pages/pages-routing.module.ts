import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'view-gallery',
    loadChildren: () => import('./dashboard/admin/view-gallery/view-gallery.module').then( m => m.ViewGalleryPageModule)
  },
  {
    path: 'get-policy',
    loadChildren: () => import('./home-pages/get-policy/get-policy.module').then( m => m.GetPolicyPageModule)
  },  {
    path: 'user-home',
    loadChildren: () => import('./dashboard/user/user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'user-account-details',
    loadChildren: () => import('./dashboard/user/user-account-details/user-account-details.module').then( m => m.UserAccountDetailsPageModule)
  },
  {
    path: 'user-history',
    loadChildren: () => import('./dashboard/user/user-history/user-history.module').then( m => m.UserHistoryPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
