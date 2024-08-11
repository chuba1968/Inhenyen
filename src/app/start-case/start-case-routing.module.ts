import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartCasePage } from './start-case.page';

const routes: Routes = [
  {
    path: '',
    component: StartCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartCasePageRoutingModule {}
