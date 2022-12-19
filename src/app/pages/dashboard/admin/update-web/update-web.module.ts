import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWebPageRoutingModule } from './update-web-routing.module';

import { UpdateWebPage } from './update-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateWebPageRoutingModule
  ],
  declarations: [UpdateWebPage]
})
export class UpdateWebPageModule {}
