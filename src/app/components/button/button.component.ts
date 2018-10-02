import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="this.onClick($event)">{{label}}</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input()
  public label: string;

  public click: EventEmitter<MouseEvent>;

  constructor() {
    this.click = new EventEmitter<MouseEvent>();
  }

  ngOnInit() {
  }

  public onClick(event: MouseEvent): void {
    this.click.emit(event);
  }

}
