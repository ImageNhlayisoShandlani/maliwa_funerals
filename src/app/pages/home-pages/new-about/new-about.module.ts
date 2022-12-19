import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAboutPageRoutingModule } from './new-about-routing.module';

import { NewAboutPage } from './new-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAboutPageRoutingModule
  ],
  declarations: [NewAboutPage]
})
export class NewAboutPageModule {}
