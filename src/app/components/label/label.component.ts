import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `<label>{{label}}</label>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {

  @Input()
  public label: string;

  constructor() { }

}
