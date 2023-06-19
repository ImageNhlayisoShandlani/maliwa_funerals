import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAccountDetailsPageRoutingModule } from './user-account-details-routing.module';

import { UserAccountDetailsPage } from './user-account-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAccountDetailsPageRoutingModule
  ],
  declarations: [UserAccountDetailsPage]
})
export class UserAccountDetailsPageModule {}
