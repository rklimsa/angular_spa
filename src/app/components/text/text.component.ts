import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `
  <div class="col-2">
    <app-label [label]="this.label"></app-label>
  </div>
  <div class="col-2">
    <app-label [label]="this.value"></app-label>
  </div>
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
