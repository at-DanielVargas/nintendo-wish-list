import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nwl-ui-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
})
export class LikeButtonComponent implements OnInit {
  @Input() active: boolean | undefined = false;
  @Output() like: EventEmitter<boolean> = new EventEmitter();

  states = [
    ['idle', '/assets/heart-love.png'],
    ['animating', '/assets/heart-love-1.gif'],
    ['active', '/assets/heart-love-active.png'],
  ];

  imageSource = this.states[0][1];

  ngOnInit(): void {
    this.active
      ? (this.imageSource = this.states[2][1])
      : (this.imageSource = this.states[0][1]);
  }

  handleLike() {
    if (this.active) {
      this.imageSource = this.states[0][1];
      this.like.emit(!this.active);
    } else {
      this.imageSource = this.states[1][1];
      setTimeout(() => {
        this.like.emit(true);
        this.imageSource = this.states[2][1];
      }, 800);
    }
  }
}
