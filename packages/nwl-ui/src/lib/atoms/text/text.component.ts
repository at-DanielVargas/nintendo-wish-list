import { Component, Input } from '@angular/core';

@Component({
  selector: 'nwl-ui-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() hoverable = false;
  @Input() variant!:
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'disabled'
    | 'purple';

  variantName = `is-${this.variant}`;
}
