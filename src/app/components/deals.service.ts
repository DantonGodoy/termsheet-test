import { Injectable } from '@angular/core';

import { DealItemModel } from '../models/deal-item.model';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor() { }

  public mockedDeals: Array<DealItemModel> = [
    {
      dealName: 'Big Warehouse',
      purchasePrice: 1_000_000,
      address: '5th Avenue',
      noi: 100_000,
    },
    {
      dealName: 'Small Warehouse',
      purchasePrice: 500_000,
      address: '1st Avenue',
      noi: 75_000,
    }
  ];

  addCreatedDeal(dealForm: DealItemModel) {
    this.mockedDeals.push(dealForm);
  }
}