import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutlawfirmPage } from './aboutlawfirm.page';

const routes: Routes = [
  {
    path: '',
    component: AboutlawfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutlawfirmPageRoutingModule {}
