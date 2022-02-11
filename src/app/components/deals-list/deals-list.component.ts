import { Component } from '@angular/core';

import { DealsService } from './../deals.service';

@Component({
  selector: 'app-deals-list',
  templateUrl: 'deals-list.component.html',
  styleUrls: ['deals-list.component.scss']
})
export class DealsListComponent {

  public dealsDisplay = this._dealsService.mockedDeals;

  constructor(private _dealsService: DealsService) { }

}
