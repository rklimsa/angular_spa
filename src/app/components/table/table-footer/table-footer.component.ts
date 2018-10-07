import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TableCell } from '../table-cell/table-cell.model';

@Component({
  selector: 'app-table-footer',
  template: `
    <p>
      table-footer works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableFooterComponent {

  @Input()
  public footers: TableCell[];

}
