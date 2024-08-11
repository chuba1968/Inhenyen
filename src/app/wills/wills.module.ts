import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WillsPageRoutingModule } from './wills-routing.module';

import { WillsPage } from './wills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WillsPageRoutingModule
  ],
  declarations: [WillsPage]
})
export class WillsPageModule {}
