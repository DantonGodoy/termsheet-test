import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-deal-form',
  templateUrl: 'create-deal-form.component.html',
  styleUrls: ['create-deal-form.component.scss']
})
export class CreateDealFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public createDealForm = new FormGroup({
    dealName: new FormControl(''),
    purchasePrice: new FormControl(''),
    address: new FormControl(''),
    noi: new FormControl(''),
    capRate: new FormControl('')
  });

}
