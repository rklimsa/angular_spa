import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from './models/ticket.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public form: FormGroup;

  public tickets: Ticket[] = [];

  public constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: '',
      creator: '',
      date: ''
    });
    this.form.valueChanges.subscribe((form: any) => {
      // TODO: Custom validation
    });
  }

  public onClick(event: MouseEvent): void {
    this.tickets.push(
      new Ticket(this.form.value.title, this.form.value.creator, this.form.value.date, new Date(Date.now())));
  }

}
