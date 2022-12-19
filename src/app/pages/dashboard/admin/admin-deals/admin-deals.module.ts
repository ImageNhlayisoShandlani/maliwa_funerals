import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDealsPageRoutingModule } from './admin-deals-routing.module';

import { AdminDealsPage } from './admin-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDealsPageRoutingModule
  ],
  declarations: [AdminDealsPage]
})
export class AdminDealsPageModule {}
