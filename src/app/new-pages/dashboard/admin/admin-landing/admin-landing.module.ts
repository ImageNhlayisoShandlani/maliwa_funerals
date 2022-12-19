import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLandingPageRoutingModule } from './admin-landing-routing.module';

import { AdminLandingPage } from './admin-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLandingPageRoutingModule
  ],
  declarations: [AdminLandingPage]
})
export class AdminLandingPageModule {}
