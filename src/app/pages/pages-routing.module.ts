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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
