import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nwl-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant!: 'primary' | 'success' | 'warning' | 'error' | 'disabled';
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  variantName!: string;
  sizeName!: string;

  ngOnInit(): void {
    if (this.variant) {
      this.variantName = `is-${this.variant}`;
    }

    if (this.size) {
      this.sizeName = `is-${this.size}`;
    }
  }
}
