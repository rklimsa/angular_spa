import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    forwardRef,
    HostListener
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export abstract class BaseComponent<T> implements ControlValueAccessor {

    @Input()
    public disabled: boolean;

    @Input()
    public value: T;
    protected onChange: (value: T) => void = (value: T) => {};
    protected onTouch: () => void = () => {};

    public constructor (private changeDetector: ChangeDetectorRef) {}

    public writeValue(value: T): void {

        // stop, if the value has stayed the same
        if (this.value === value) {
            return;
        }

        // normalize the value
        value = this.normalize(value);

        this.onChange(value);

        this.onTouch();

        this.renderValue(value);

        // set the value
        this.value = value;

        // trigger change detection
        this.changeDetector.detectChanges();
    }

    public registerOnChange(fn: (value: T) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    /**
     * Has to be overwritten by components. Returns otherwise only the argument
     * without doing any modifications.
     *
     * @param value The value to be normalized
     */
    protected normalize(value: T): T {
        return value;
    }


    public abstract renderValue(value: T): void;
}
