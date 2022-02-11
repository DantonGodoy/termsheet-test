import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DealItemModel } from 'src/app/models/deal-item.model';
import { DealsService } from '../deals.service';

@Component({
  selector: 'app-create-deal-form',
  templateUrl: 'create-deal-form.component.html',
  styleUrls: ['create-deal-form.component.scss']
})
export class CreateDealFormComponent {

  constructor(private _dealsService: DealsService, private _snackBar: MatSnackBar) { }

  public createDealForm = new FormGroup({
    dealName: new FormControl(null, Validators.required),
    purchasePrice: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    noi: new FormControl(null, Validators.required),
  });

  public createDeal(dealForm: DealItemModel) {
    this._dealsService.addCreatedDeal(dealForm);
    this._snackBar.open('Deal created successfully!', '', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

}
