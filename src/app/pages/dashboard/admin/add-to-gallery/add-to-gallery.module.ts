import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToGalleryPageRoutingModule } from './add-to-gallery-routing.module';

import { AddToGalleryPage } from './add-to-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToGalleryPageRoutingModule
  ],
  declarations: [AddToGalleryPage]
})
export class AddToGalleryPageModule {}
