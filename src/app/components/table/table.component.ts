import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

/**
 * A full scalable and extendable table component.
 * All input parameters are optional. If the headers
 * are omitted, then no headers are displayed. If the
 * footers are omitted, then no footers are displayed.
 * If the table data is omitted, then no table rows
 * are displayed.
 *
 * The input parameters are headers, data and footers.
 */
@Component({
  selector: 'app-table',
  template: `
    <app-table-header class="row"></app-table-header>
    <app-table-row></app-table-row>
    <app-table-footer class="row"></app-table-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input()
  public headers: string[];

  @Input()
  public footers: string[];

  constructor() { }

  ngOnInit() {
  }

}
