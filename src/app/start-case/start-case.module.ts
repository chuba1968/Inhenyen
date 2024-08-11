import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartCasePageRoutingModule } from './start-case-routing.module';

import { StartCasePage } from './start-case.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartCasePageRoutingModule
  ],
  declarations: [StartCasePage]
})
export class StartCasePageModule {}
