import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorporatePageRoutingModule } from './corporate-routing.module';

import { CorporatePage } from './corporate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorporatePageRoutingModule
  ],
  declarations: [CorporatePage]
})
export class CorporatePageModule {}
