import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAddDealsPageRoutingModule } from './admin-add-deals-routing.module';

import { AdminAddDealsPage } from './admin-add-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAddDealsPageRoutingModule
  ],
  declarations: [AdminAddDealsPage]
})
export class AdminAddDealsPageModule {}
