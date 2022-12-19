import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMembersPageRoutingModule } from './admin-members-routing.module';

import { AdminMembersPage } from './admin-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMembersPageRoutingModule
  ],
  declarations: [AdminMembersPage]
})
export class AdminMembersPageModule {}
