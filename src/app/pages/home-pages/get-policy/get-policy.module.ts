import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetPolicyPageRoutingModule } from './get-policy-routing.module';

import { GetPolicyPage } from './get-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetPolicyPageRoutingModule
  ],
  declarations: [GetPolicyPage]
})
export class GetPolicyPageModule {}
