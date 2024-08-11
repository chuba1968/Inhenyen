import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorporatePage } from './corporate.page';

const routes: Routes = [
  {
    path: '',
    component: CorporatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporatePageRoutingModule {}
