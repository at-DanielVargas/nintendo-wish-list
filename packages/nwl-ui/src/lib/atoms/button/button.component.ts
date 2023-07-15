import { Component, Input } from '@angular/core';

@Component({
  selector: 'nwl-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant!: 'primary' | 'success' | 'warning' | 'error' | 'disabled';
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  variantName = `is-${this.variant}`;
}
