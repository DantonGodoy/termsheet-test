import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <h3 class="footer-text">
      Made by Danton Godoy | 2022
    </h3>
  `,
  styles: [`
    .footer-text {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      letter-spacing: 2px;
    }
  `]
})
export class FooterComponent {}
