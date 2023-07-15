import {
  Component,
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[nwlUiDialogContent]',
})
export class DialogContentDirective {
  constructor(public tpl: TemplateRef<any>) {}
}

@Directive({
  selector: '[nwlUiDialogFooter]',
})
export class DialogFooterDirective {
  constructor(public tpl: TemplateRef<any>) {}
}

@Directive({
  selector: '[nwlUiDialogHeader]',
})
export class DialogHeaderDirective {
  constructor(public tpl: TemplateRef<any>) {}
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[nwlUiDialog]',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @ContentChild(DialogContentDirective, { static: false })
  content!: DialogContentDirective;
  @ContentChild(DialogHeaderDirective, { static: false })
  header!: DialogHeaderDirective;
  @ContentChild(DialogFooterDirective, { static: false })
  footer!: DialogFooterDirective;

  @ViewChild('contentVcr', { read: ViewContainerRef, static: true })
  private contentVcr!: ViewContainerRef;

  @ViewChild('headerVcr', { read: ViewContainerRef, static: true })
  private headerVcr!: ViewContainerRef;

  @ViewChild('footerVcr', { read: ViewContainerRef, static: true })
  private footerVcr!: ViewContainerRef;

  @Input() title!: string;

  constructor(private host: ElementRef) {}

  ngAfterContentInit() {}

  showModal() {
    this.host.nativeElement.showModal();
    this.contentVcr &&
      this.contentVcr.createEmbeddedView(this.content.tpl);
    this.headerVcr &&
      this.headerVcr.createEmbeddedView(this.header.tpl);
    this.footerVcr &&
      this.footerVcr?.createEmbeddedView(this.footer.tpl);
  }

  close() {
    this.element.addEventListener(
      'animationend',
      (e: AnimationEvent) => {
        if (e.animationName === 'fadeOut') {
          this.element.close();
          this.clear();
          this.element.removeAttribute('closing');
        }
      },
      { once: true }
    );

    this.element.setAttribute('closing', 'true');

    this.element.close();
    this.clear();
  }

  private get element() {
    return this.host.nativeElement;
  }

  private clear() {
    this.contentVcr?.clear();
    this.footerVcr?.clear();
    this.headerVcr?.clear();
  }

  @HostListener('click', ['$event'])
  onDialogClick(event: MouseEvent) {
    if ((event.target as any).nodeName === 'DIALOG') {
      this.close();
    }
  }

  @HostListener('cancel')
  onDialogCancel() {
    this.clear();
  }
}
