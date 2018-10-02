import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  forwardRef,
  ViewChild,
  ElementRef,
  Renderer2,
  EventEmitter
} from '@angular/core';
import {
  BaseComponent
} from '../base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <input
      #input
      [type]=this.type
      [placeholder]=this.placeholder
      [value]=this.value
      (blur)="this.onValueChange($event)"
      (click)="this.onElementTouch($event)"
      (keypress)="this.onKeyPressed($event)"
    >
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseComponent<string> {

  @Input()
  public type: string;

  @Input()
  public placeholder: string;

  @ViewChild('input')
  public element: ElementRef;

  public click: EventEmitter<MouseEvent>;
  public blur: EventEmitter<FocusEvent>;
  public input: EventEmitter<KeyboardEvent>;

  constructor(changeDetector: ChangeDetectorRef, private renderer: Renderer2) {
    super(changeDetector);
    this.click = new EventEmitter<MouseEvent>();
    this.blur = new EventEmitter<FocusEvent>();
    this.input = new EventEmitter<KeyboardEvent>();
  }

  public renderValue(value: string): void {
    this.renderer.setValue(this.element.nativeElement, value);
  }

  public onValueChange(event: FocusEvent): void {
    this.writeValue((<HTMLInputElement> event.target).value);
    this.blur.emit(event);
  }

  public onElementTouch(event: MouseEvent): void {
    this.writeValue((<HTMLInputElement> event.target).value);
    this.click.emit(event);
  }

  public onKeyPressed(event: KeyboardEvent): void {
    this.input.emit(event);
  }

}
