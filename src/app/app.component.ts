import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from './models/ticket.model';
import { TableCell } from './components/table/table-cell/table-cell.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public form: FormGroup;

  public tickets: Ticket[] = [];

  public headers: TableCell[] = [];

  private headerJson: any[] = [{
    colSpan: 1,
    rowSpan: 1,
    style: '',
    value: 'Bezeichnung'
  }, {
    colSpan: 1,
    rowSpan: 1,
    style: '',
    value: 'Ersteller'
  }, {
    colSpan: 1,
    rowSpan: 1,
    style: '',
    value: 'Erstellungszeit'
  }, {
    colSpan: 1,
    rowSpan: 1,
    style: '',
    value: 'Ablaufdatum'
  }];

  public constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: '',
      creator: '',
      date: ''
    });
    this.form.valueChanges.subscribe((form: any) => {
      // TODO: Custom validation
    });

    this.headerJson.forEach((hJson) => {
      this.headers.push(new TableCell(hJson.value, hJson.rowSpan, hJson.colSpan, hJson.style));
    });
  }

  public onClick(event: MouseEvent): void {
    this.tickets.push(
      new Ticket(this.form.value.title, this.form.value.creator, this.form.value.date, new Date(Date.now())));
  }

  public convertToRows(tickets: Ticket[]) {
    const result: TableCell[][] = [];

    tickets.forEach((t: Ticket, index: number) => {
      result.push([]);
      result[index].push(new TableCell(t.getTitle(), 1, 1, ''));
      result[index].push(new TableCell(t.getCreator(), 1, 1, ''));
      result[index].push(new TableCell(t.getCreationDate().toString(), 1, 1, ''));
      result[index].push(new TableCell(t.getDueDate().toString(), 1, 1, ''));
    });

    return result;
  }

}
