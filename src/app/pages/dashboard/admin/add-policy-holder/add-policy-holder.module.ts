import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPolicyHolderPageRoutingModule } from './add-policy-holder-routing.module';

import { AddPolicyHolderPage } from './add-policy-holder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPolicyHolderPageRoutingModule
  ],
  declarations: [AddPolicyHolderPage]
})
export class AddPolicyHolderPageModule {}
