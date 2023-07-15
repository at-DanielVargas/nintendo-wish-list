import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectOption } from './interfaces';

@Component({
  selector: 'nwl-ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() label!: string;
  @Input() placeholder = 'Select';
  @Input() options!: SelectOption[];

  @Output() selectChange: EventEmitter<any> = new EventEmitter();
}
