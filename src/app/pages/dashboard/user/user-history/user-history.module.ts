import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserHistoryPageRoutingModule } from './user-history-routing.module';

import { UserHistoryPage } from './user-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserHistoryPageRoutingModule
  ],
  declarations: [UserHistoryPage]
})
export class UserHistoryPageModule {}
