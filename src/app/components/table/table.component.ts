import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TableCell } from './table-cell/table-cell.model';

/**
 * A full scalable and extendable table component.
 * All input parameters are optional. If the headers
 * are omitted, then no headers are displayed. If the
 * footers are omitted, then no footers are displayed.
 * If the table data is omitted, then no table rows
 * are displayed.
 *
 * The input parameters are headers, data and footers.
 *
 * The data array is 2-Dimensional. The first index says
 * how many table rows will be displayed and the second index
 * states how many elements are in each table row.
 *
 * Examnple: data[2][1] = [['Table row 1'], ['Table row 2']]
 *
 * Just fill the part of the footer array with the
 * specific index you want to have and leave the
 * rest to null.
 *
 * Example: footer: [null, null, null, '2.000,00', null]
 *
 * Important is that is has the same length
 * as the data array and the header array. If the length
 * differs to the header array, than the component creation
 * fails. An exception is made, when an array is omitted.
 *
 * Examples:
 *
 * Correct: header length: 0 (omitted), data length: 5, footer length: 5
 * Correct: header length: 4, data length: 4, footer length: 4
 * Correct: header length: 3, data length: 0 (omitted), footer length: 3
 * Wrong: header length: 1, data length: 2, footer length: 3
 * Wrong: header length: 5, data length: 0 (omitted), footer length: 3
 */
@Component({
  selector: 'app-table',
  template: `
    <table border="1">
      <app-table-header [headers]="this.headers"></app-table-header><br>
      <app-table-row [rows]="this.rows"></app-table-row><br>
      <app-table-footer [footers]="this.footers"></app-table-footer><br>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input()
  public headers: TableCell[];

  @Input()
  public rows: TableCell[][];

  @Input()
  public footers: TableCell[];

  constructor() { }

  ngOnInit() {
  }

}
