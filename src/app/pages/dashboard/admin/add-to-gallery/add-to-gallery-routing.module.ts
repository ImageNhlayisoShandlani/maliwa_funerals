import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToGalleryPage } from './add-to-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: AddToGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToGalleryPageRoutingModule {}
