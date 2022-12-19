import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAddProductPageRoutingModule } from './admin-add-product-routing.module';

import { AdminAddProductPage } from './admin-add-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAddProductPageRoutingModule
  ],
  declarations: [AdminAddProductPage]
})
export class AdminAddProductPageModule {}
