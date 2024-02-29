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
  },
  {
    path: 'transer-scanpickbin',
    loadChildren: () => import('./transer-scanpickbin/transer-scanpickbin.module').then( m => m.TranserScanpickbinPageModule)
  },
  {
    path: 'binrefills',
    loadChildren: () => import('./binrefills/binrefills.module').then( m => m.BinrefillsPageModule)
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
  },
  {
    path: 'stock-moredetails',
    loadChildren: () => import('./stock-moredetails/stock-moredetails.module').then( m => m.StockMoredetailsPageModule)
  },
  {
    path: 'transfer3',
    loadChildren: () => import('./transfer3/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'trans-scanpickbin',
    loadChildren: () => import('./trans-scanpickbin/trans-scanpickbin.module').then( m => m.TransScanpickbinPageModule)
  },
  {
    path: 'stock-batchscanner',
    loadChildren: () => import('./stock-batchscanner/stock-batchscanner.module').then( m => m.StockBatchscannerPageModule)
  },
  {
    path: 'transfer-scanproduct',
    loadChildren: () => import('./transfer-scanproduct/transfer-scanproduct.module').then( m => m.TransferScanproductPageModule)
  },
  {
    path: 'trans-scanbatch',
    loadChildren: () => import('./trans-scanbatch/trans-scanbatch.module').then( m => m.TransScanbatchPageModule)
  },
  {
    path: 'stock-detail',
    loadChildren: () => import('./stock-detail/stock-detail.module').then( m => m.StockDetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'despatch',
    loadChildren: () => import('./despatch/despatch.module').then( m => m.DespatchPageModule)
  },
  {
    path: 'browse-order',
    loadChildren: () => import('./browse-order/browse-order.module').then( m => m.BrowseOrderPageModule)
  },
  {
    path: 'stage-collect-order',
    loadChildren: () => import('./stage-collect-order/stage-collect-order.module').then( m => m.StageCollectOrderPageModule)
  },
  {
    path: 'label-count',
    loadChildren: () => import('./label-count/label-count.module').then( m => m.LabelCountPageModule)
  },
  {
    path: 'scan-box-lookup',
    loadChildren: () => import('./scan-box-lookup/scan-box-lookup.module').then( m => m.ScanBoxLookupPageModule)
  },
  {
    path: 'scan-print-label',
    loadChildren: () => import('./scan-print-label/scan-print-label.module').then( m => m.ScanPrintLabelPageModule)
  },
  {
    path: 'order-detail-print',
    loadChildren: () => import('./order-detail-print/order-detail-print.module').then( m => m.OrderDetailPrintPageModule)
  },
  {
    path: 'label-count-print',
    loadChildren: () => import('./label-count-print/label-count-print.module').then( m => m.LabelCountPrintPageModule)
  },
  {
    path: 'scan-order-number-print',
    loadChildren: () => import('./scan-order-number-print/scan-order-number-print.module').then( m => m.ScanOrderNumberPrintPageModule)
  },
  {
    path: 'device-format-print',
    loadChildren: () => import('./device-format-print/device-format-print.module').then( m => m.DeviceFormatPrintPageModule)
  },
  {
    path: 'order-detail-stage',
    loadChildren: () => import('./order-detail-stage/order-detail-stage.module').then( m => m.OrderDetailStagePageModule)
  },
  {
    path: 'order-detail-collect',
    loadChildren: () => import('./order-detail-collect/order-detail-collect.module').then( m => m.OrderDetailCollectPageModule)
  },
  {
    path: 'device-format-stage',
    loadChildren: () => import('./device-format-stage/device-format-stage.module').then( m => m.DeviceFormatStagePageModule)
  },
  {
    path: 'device-format-collect',
    loadChildren: () => import('./device-format-collect/device-format-collect.module').then( m => m.DeviceFormatCollectPageModule)
  },
  {
    path: 'label-count-collect',
    loadChildren: () => import('./label-count-collect/label-count-collect.module').then( m => m.LabelCountCollectPageModule)
  },
  {
    path: 'label-count-stage',
    loadChildren: () => import('./label-count-stage/label-count-stage.module').then( m => m.LabelCountStagePageModule)
  },
  {
    path: 'scan-box-stage',
    loadChildren: () => import('./scan-box-stage/scan-box-stage.module').then( m => m.ScanBoxStagePageModule)
  },
  {
    path: 'scan-box-collect',
    loadChildren: () => import('./scan-box-collect/scan-box-collect.module').then( m => m.ScanBoxCollectPageModule)
  },
  {
    path: 'confirm-box-collect',
    loadChildren: () => import('./confirm-box-collect/confirm-box-collect.module').then( m => m.ConfirmBoxCollectPageModule)
  },
  {
    path: 'confirm-box-stage',
    loadChildren: () => import('./confirm-box-stage/confirm-box-stage.module').then( m => m.ConfirmBoxStagePageModule)
  },
  {
    path: 'complete-stage',
    loadChildren: () => import('./complete-stage/complete-stage.module').then( m => m.CompleteStagePageModule)
  },
  {
    path: 'complete-collect',
    loadChildren: () => import('./complete-collect/complete-collect.module').then( m => m.CompleteCollectPageModule)
  },
  {
    path: 'scan-staging-area-stage',
    loadChildren: () => import('./scan-staging-area-stage/scan-staging-area-stage.module').then( m => m.ScanStagingAreaStagePageModule)
  },
  {
    path: 'scan-search-order',
    loadChildren: () => import('./scan-search-order/scan-search-order.module').then( m => m.ScanSearchOrderPageModule)
  },
  {
    path: 'scan-next-box-collect',
    loadChildren: () => import('./scan-next-box-collect/scan-next-box-collect.module').then( m => m.ScanNextBoxCollectPageModule)
  },
  {
    path: 'review-order-browse',
    loadChildren: () => import('./review-order-browse/review-order-browse.module').then( m => m.ReviewOrderBrowsePageModule)
  },
  {
    path: 'scan-box-browse',
    loadChildren: () => import('./scan-box-browse/scan-box-browse.module').then( m => m.ScanBoxBrowsePageModule)
  },
  {
    path: 'scan-bin-browse',
    loadChildren: () => import('./scan-bin-browse/scan-bin-browse.module').then( m => m.ScanBinBrowsePageModule)
  },
  {
    path: 'confirm-item-browse',
    loadChildren: () => import('./confirm-item-browse/confirm-item-browse.module').then( m => m.ConfirmItemBrowsePageModule)
  },
  {
    path: 'scan-batch-browse',
    loadChildren: () => import('./scan-batch-browse/scan-batch-browse.module').then( m => m.ScanBatchBrowsePageModule)
  },
  {
    path: 'scan-lot-browse',
    loadChildren: () => import('./scan-lot-browse/scan-lot-browse.module').then( m => m.ScanLotBrowsePageModule)
  },
  {
    path: 'scan-count-browse',
    loadChildren: () => import('./scan-count-browse/scan-count-browse.module').then( m => m.ScanCountBrowsePageModule)
  },
  {
    path: 'all-items-picked-browse',
    loadChildren: () => import('./all-items-picked-browse/all-items-picked-browse.module').then( m => m.AllItemsPickedBrowsePageModule)
  },
  {
    path: 'box-success-stage',
    loadChildren: () => import('./box-success-stage/box-success-stage.module').then( m => m.BoxSuccessStagePageModule)
  },
  {
    path: 'scan-box-result-lookup',
    loadChildren: () => import('./scan-box-result-lookup/scan-box-result-lookup.module').then( m => m.ScanBoxResultLookupPageModule)
  },
  {
    path: 'scan-box-next-stage',
    loadChildren: () => import('./scan-box-next-stage/scan-box-next-stage.module').then( m => m.ScanBoxNextStagePageModule)
  },
  {
    path: 'transfer2',
    loadChildren: () => import('./transfer2/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'transfer-bin-source',
    loadChildren: () => import('./transfer-bin-source/transfer-bin-source.module').then( m => m.TransferBinSourcePageModule)
  },
  {
    path: 'transfer-bin-destination',
    loadChildren: () => import('./transfer-bin-destination/transfer-bin-destination.module').then( m => m.TransferBinDestinationPageModule)
  },
  {
    path: 'scan-transfer-bin',
    loadChildren: () => import('./scan-transfer-bin/scan-transfer-bin.module').then( m => m.ScanTransferBinPageModule)
  },
  {
    path: 'scan-putaway-transfer-bin',
    loadChildren: () => import('./scan-putaway-transfer-bin/scan-putaway-transfer-bin.module').then( m => m.ScanPutawayTransferBinPageModule)
  },
  {
    path: 'complete-transfer-bin',
    loadChildren: () => import('./complete-transfer-bin/complete-transfer-bin.module').then( m => m.CompleteTransferBinPageModule)
  },
  {
    path: 'transfer-menu',
    loadChildren: () => import('./transfer-menu/transfer-menu.module').then( m => m.TransferMenuPageModule)
  },
  {
    path: 'bin-lookup',
    loadChildren: () => import('./bin-lookup/bin-lookup.module').then( m => m.BinLookupPageModule)
  },
  {
    path: 'jas-main',
    loadChildren: () => import('./jas-main/jas-main.module').then( m => m.JasMainPageModule)
  },
  {
    path: 'scan-bin',
    loadChildren: () => import('./scan-bin/scan-bin.module').then( m => m.ScanBinPageModule)
  },
  {
    path: 'scan-bin',
    loadChildren: () => import('./scan-bin/scan-bin.module').then( m => m.ScanBinPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'transfer-destination',
    loadChildren: () => import('./transfer-destination/transfer-destination.module').then( m => m.TransferDestinationPageModule)
  },
  {
    path: 'scanlot',
    loadChildren: () => import('./scanlot/scanlot.module').then( m => m.ScanlotPageModule)
  },
  {
    path: 'scanlot',
    loadChildren: () => import('./scanlot/scanlot.module').then( m => m.ScanlotPageModule)
  },
  {
    path: 'enter-qty',
    loadChildren: () => import('./enter-qty/enter-qty.module').then( m => m.EnterQtyPageModule)
  },
  {
    path: 'scan-putaway',
    loadChildren: () => import('./scan-putaway/scan-putaway.module').then( m => m.ScanPutawayPageModule)
  },
  {
    path: 'transfer-comp',
    loadChildren: () => import('./transfer-comp/transfer-comp.module').then( m => m.TransferCompPageModule)
  },
  {
    path: 'confirm-qty',
    loadChildren: () => import('./confirm-qty/confirm-qty.module').then( m => m.ConfirmQtyPageModule)

  }, 
  {   
    path: 'urgentbinrefill',
    loadChildren: () => import('./urgentbinrefill/urgentbinrefill.module').then( m => m.UrgentbinrefillPageModule)
  },
  {   
    path: 'item1',
    loadChildren: () => import('./item1/item1.module').then( m => m.Item1PageModule)
  },
  {   
    path: 'item2',
    loadChildren: () => import('./item2/item2.module').then( m => m.Item2PageModule)
  },
  {   
    path: 'item3',
    loadChildren: () => import('./item3/item3.module').then( m => m.Item3PageModule)
  },  {
    path: 'trans-destination',
    loadChildren: () => import('./trans-destination/trans-destination.module').then( m => m.TransDestinationPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
