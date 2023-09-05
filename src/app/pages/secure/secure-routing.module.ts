import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'styleguide',
    loadChildren: () => import('./styleguide/styleguide.module').then(m => m.StyleguidePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'settings/profile/edit',
    loadChildren: () => import('./profile/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'payments/detail',
    loadChildren: () => import('./payments/payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  },
  {
    path: 'stock-lookup',
    loadChildren: () => import('./stock-lookup/stock-lookup.module').then( m => m.StockLookupPageModule)
  },
  {
    path: 'stock-detail',
    loadChildren: () => import('./stock-detail/stock-detail.module').then( m => m.StockDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
