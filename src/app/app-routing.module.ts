import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PublicGuard } from './guards/public.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', // TODO: Set this to ''
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/secure/secure.module').then(m => m.SecureModule),
    // canActivate: [AuthGuard] // Secure all child pages
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/public/welcome/welcome.module').then(m => m.WelcomePageModule),
    // canActivate: [PublicGuard] // Prevent for signed in users
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/public/signin/signin.module').then(m => m.SigninPageModule),
    // canActivate: [PublicGuard] // Prevent for signed in users
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/public/signup/signup.module').then(m => m.SignupPageModule),
    // canActivate: [PublicGuard] // Prevent for signed in users
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/public/password-reset/password-reset.module').then( m => m.PasswordResetPageModule),
    // canActivate: [PublicGuard] // Prevent for signed in users
  },
  {
    path: 'item1',
    loadChildren: () => import('./pages/secure/item1/item1.module').then( m => m.Item1PageModule)
  },
  {
    path: 'item2',
    loadChildren: () => import('./pages/secure/item2/item2.module').then( m => m.Item2PageModule)
  },
  {
    path: 'item3',
    loadChildren: () => import('./pages/secure/item3/item3.module').then( m => m.Item3PageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
