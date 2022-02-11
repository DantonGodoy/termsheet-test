import { Component } from '@angular/core';

import { GridSettingsModel } from './models/mat-grid.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public gridSettings: GridSettingsModel = {
    headerTile: {
      text: 'Header', cols: 4, rows: 1, color: '#072227'
    },
    dealsListTile: {
      text: 'Deals-List', cols: 2, rows: 8, color: '#35858B'
    },
    dealFormTile: {
      text: 'Deal-Form', cols: 2, rows: 8, color: '#4FBDBA'
    },
    footerTile: {
      text: 'Deal-Form', cols: 4, rows: 1, color: '#072227'
    }
  };
}
