import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `
    <span
    [class]="this.labelStyle">
      {{label}}
    </span>
    <span
    [class]="this.valueStyle">
      {{value}}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent {

  @Input()
  public label: string;

  @Input()
  public value: string;

  @Input()
  public labelStyle: string;

  @Input()
  public valueStyle: string;

}
