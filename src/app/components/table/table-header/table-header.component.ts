import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TableCell } from '../table-cell/table-cell.model';

@Component({
  selector: 'app-table-header',
  template: `
    <tr>
      <th *ngFor="let header of headers"
          [attr.colspan]="header.getColSpan()"
          [attr.rowspan]="header.getRowSpan()">
        {{header.getText()}}
      </th>
    </tr>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeaderComponent {

  @Input()
  public headers: TableCell[];

}
