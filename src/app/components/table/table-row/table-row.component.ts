import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TableCell } from '../table-cell/table-cell.model';

@Component({
  selector: 'app-table-row',
  template: `
    <tr *ngFor="let row of rows">
      <td *ngFor="let data of row"
      [attr.colspan]="data.getColSpan()"
      [attr.rowspan]="data.getRowSpan()">
      {{data.getText()}}
      </td>
    </tr>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent {

  @Input()
  public rows: TableCell[][];

}
