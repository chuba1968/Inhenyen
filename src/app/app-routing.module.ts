import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'start-case',
    loadChildren: () => import('./start-case/start-case.module').then( m => m.StartCasePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'aboutlawfirm',
    loadChildren: () => import('./aboutlawfirm/aboutlawfirm.module').then( m => m.AboutlawfirmPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'wills',
    loadChildren: () => import('./wills/wills.module').then( m => m.WillsPageModule)
  },
  {
    path: 'litigation',
    loadChildren: () => import('./litigation/litigation.module').then( m => m.LitigationPageModule)
  },
  {
    path: 'corporate',
    loadChildren: () => import('./corporate/corporate.module').then( m => m.CorporatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
