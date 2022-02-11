import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h2 class="header-text">
      TermSheet Angular Test
    </h2>
  `,
  styles: [`
  :host {
    width: 100%;
    padding: 0 24px;
  }
    .header-text {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  `]
})
export class AppHeaderComponent {}
