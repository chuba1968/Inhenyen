import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LitigationPageRoutingModule } from './litigation-routing.module';

import { LitigationPage } from './litigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LitigationPageRoutingModule
  ],
  declarations: [LitigationPage]
})
export class LitigationPageModule {}
