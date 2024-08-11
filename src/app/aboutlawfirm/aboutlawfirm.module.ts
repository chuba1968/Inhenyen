import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutlawfirmPageRoutingModule } from './aboutlawfirm-routing.module';

import { AboutlawfirmPage } from './aboutlawfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutlawfirmPageRoutingModule
  ],
  declarations: [AboutlawfirmPage]
})
export class AboutlawfirmPageModule {}
