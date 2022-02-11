import { Component, OnInit } from '@angular/core';

import { DealItemModel } from './../../models/deal-item.model';

@Component({
  selector: 'app-deals-list',
  templateUrl: 'deals-list.component.html',
  styleUrls: ['deals-list.component.scss']
})
export class DealsListComponent implements OnInit {

  public mockedDeals: Array<DealItemModel> = [
    {
      deal_name: 'Big warehouse',
      purchase_price: '$ 1.000,000',
      address: '5th Avenue',
      noi: 'a',
      cap_rate: 'v'
    },
    {
      deal_name: 'Small warehouse',
      purchase_price: '$ 500,000',
      address: '1st Avenue',
      noi: 'z',
      cap_rate: 'q'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
